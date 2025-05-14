// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDisplayConfigShrinkRequest extends $dara.Model {
  androidInstanceIds?: string[];
  displayConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      displayConfigShrink: 'DisplayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      displayConfigShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

