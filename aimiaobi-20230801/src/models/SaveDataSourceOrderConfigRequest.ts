// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDataSourceOrderConfigRequestUserConfigDataSourceList extends $dara.Model {
  /**
   * @remarks
   * Code description
   * 
   * This parameter is required.
   * 
   * @example
   * QuarkCommonNews
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether to enable the data source.
   */
  enable?: boolean;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 夸克通用搜索
   */
  name?: string;
  /**
   * @remarks
   * Quantity
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  number?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
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
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The generation technology for Miaosou. This parameter is valid only when \\`ProductCode\\` is set to \\`miaosou\\`.
   * 
   * Valid values:
   * 
   * - copilotPrecise
   * 
   * - copilotReference
   * 
   * @example
   * copilotReference
   */
  generateTechnology?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * - miaobi
   * 
   * - miaosou
   * 
   * This parameter is required.
   * 
   * @example
   * miaobi
   */
  productCode?: string;
  /**
   * @remarks
   * The data source configuration.
   * 
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

