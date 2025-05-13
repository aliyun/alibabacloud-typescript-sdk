// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConfigsRequestConfigs } from "./UpdateConfigsRequestConfigs";


export class UpdateConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of workspace configurations to update or add.
   */
  configs?: UpdateConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': UpdateConfigsRequestConfigs },
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

