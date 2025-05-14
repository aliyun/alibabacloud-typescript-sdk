// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDisplayConfigRequestDisplayConfig } from "./ModifyDisplayConfigRequestDisplayConfig";


export class ModifyDisplayConfigRequest extends $dara.Model {
  androidInstanceIds?: string[];
  displayConfig?: ModifyDisplayConfigRequestDisplayConfig;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      displayConfig: 'DisplayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      displayConfig: ModifyDisplayConfigRequestDisplayConfig,
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(this.displayConfig && typeof (this.displayConfig as any).validate === 'function') {
      (this.displayConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

