// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveDataSourceOrderConfigRequestUserConfigDataSourceList } from "./SaveDataSourceOrderConfigRequestUserConfigDataSourceList";


export class SaveDataSourceOrderConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * miaobi
   */
  productCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userConfigDataSourceList?: SaveDataSourceOrderConfigRequestUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
      userConfigDataSourceList: { 'type': 'array', 'itemType': SaveDataSourceOrderConfigRequestUserConfigDataSourceList },
    };
  }

  validate() {
    if(Array.isArray(this.userConfigDataSourceList)) {
      $dara.Model.validateArray(this.userConfigDataSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

