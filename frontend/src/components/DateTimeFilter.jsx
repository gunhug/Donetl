import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

import { options } from "@/lib/data"

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  return (
    (
    <Combobox
      value={dateQuery}
      onValueChange={setDateQuery}
      items={options.map((option) => option.label)}
    >
      <ComboboxInput placeholder="Select a time range" />
      <ComboboxContent>
        <ComboboxEmpty>No time range found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
  )
}

export default DateTimeFilter