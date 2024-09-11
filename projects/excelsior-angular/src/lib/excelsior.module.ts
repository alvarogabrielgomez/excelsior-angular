import { NgModule } from '@angular/core'
import { ExBadgeComponent } from './atoms/badge/badge.component'
import { ExIconComponent } from './atoms/icon/ex-icon.component'
import { ExButtonComponent } from './atoms/button/ex-button.component'
import { ExCardComponent } from './atoms/card/card.component'
import { CheckboxComponent as ExCheckboxComponent } from './atoms/checkbox/checkbox.component'
import { ExCheckboxGroupComponent } from './atoms/checkbox-group/checkbox-group.component'
import { CollapsibleComponent as ExCollapsibleComponent } from './atoms/collapsable/collapsible.component'
import { SelectDropdownComponent as ExSelectDropdownComponent } from './atoms/dropdown/dropdown.component'
import { ExInputComponent } from './atoms/input/input.component'
import { DropdownComponent as DropdownComponent } from './atoms/dropdown-custom/dropdown.component'
import { RadioButtonComponent as ExRadioButtonComponent } from './atoms/radio/radio-button.component'
import { SearchInputDropdownComponent as ExSearchInputDropdownComponent } from './atoms/search-input/search-input-dropdown.component'
import { ExLayoutMainComponent } from './atoms/layout-main/ex-layout-main.component'
import { ExModalComponent } from './organisms/modal/modal.component'

@NgModule({
  declarations: [],
  imports: [
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExSelectDropdownComponent,
    ExIconComponent,
    ExInputComponent,
    DropdownComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
    ExLayoutMainComponent,
    ExModalComponent,
  ],
  exports: [
    // Atoms
    ExBadgeComponent,
    ExButtonComponent,
    ExCardComponent,
    ExCheckboxComponent,
    ExCheckboxGroupComponent,
    ExCollapsibleComponent,
    ExSelectDropdownComponent,
    ExIconComponent,
    ExInputComponent,
    DropdownComponent,
    ExRadioButtonComponent,
    ExSearchInputDropdownComponent,
    ExLayoutMainComponent,

    // Organisms
    ExModalComponent,
  ], // Exporta os componentes para que possam ser usados fora da biblioteca
})
export class ExcelsiorModule {}
