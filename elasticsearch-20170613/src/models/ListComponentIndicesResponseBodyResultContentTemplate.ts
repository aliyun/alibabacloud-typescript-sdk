// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentIndicesResponseBodyResultContentTemplateSettings } from "./ListComponentIndicesResponseBodyResultContentTemplateSettings";


export class ListComponentIndicesResponseBodyResultContentTemplate extends $dara.Model {
  settings?: ListComponentIndicesResponseBodyResultContentTemplateSettings;
  static names(): { [key: string]: string } {
    return {
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: ListComponentIndicesResponseBodyResultContentTemplateSettings,
    };
  }

  validate() {
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

