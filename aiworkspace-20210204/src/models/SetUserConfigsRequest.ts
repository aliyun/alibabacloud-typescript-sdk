// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetUserConfigsRequestConfigs } from "./SetUserConfigsRequestConfigs";


export class SetUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations list.
   */
  configs?: SetUserConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': SetUserConfigsRequestConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

