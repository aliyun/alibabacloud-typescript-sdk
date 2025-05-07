// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveDataSourceOrderConfigShrinkRequest extends $dara.Model {
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
  userConfigDataSourceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceListShrink: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
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

