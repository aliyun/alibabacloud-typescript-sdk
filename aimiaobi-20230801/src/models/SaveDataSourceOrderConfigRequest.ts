// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDataSourceOrderConfigRequestUserConfigDataSourceList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * QuarkCommonNews
   */
  code?: string;
  enable?: boolean;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  number?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SystemSearch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      enable: 'Enable',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      enable: 'boolean',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @example
   * copilotReference
   */
  generateTechnology?: string;
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
      generateTechnology: 'GenerateTechnology',
      productCode: 'ProductCode',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      generateTechnology: 'string',
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

