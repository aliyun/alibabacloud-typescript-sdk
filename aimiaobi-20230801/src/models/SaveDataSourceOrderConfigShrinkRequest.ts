// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDataSourceOrderConfigShrinkRequest extends $dara.Model {
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
  userConfigDataSourceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      generateTechnology: 'GenerateTechnology',
      productCode: 'ProductCode',
      userConfigDataSourceListShrink: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      generateTechnology: 'string',
      productCode: 'string',
      userConfigDataSourceListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

