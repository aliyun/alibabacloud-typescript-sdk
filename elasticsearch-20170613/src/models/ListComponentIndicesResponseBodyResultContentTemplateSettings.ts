// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex } from "./ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex";


export class ListComponentIndicesResponseBodyResultContentTemplateSettings extends $dara.Model {
  index?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex,
    };
  }

  validate() {
    if(this.index && typeof (this.index as any).validate === 'function') {
      (this.index as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

