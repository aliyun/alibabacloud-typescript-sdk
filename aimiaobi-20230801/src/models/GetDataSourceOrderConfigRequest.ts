// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceOrderConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * d9a1f6146a37446495d9985c2e7b267e_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * When productCode=miaosou, this corresponds to Miaosou: generation technology. Possible values:
   * 
   * Valid values:
   * 
   * - copilotPrecise
   * 
   * - copilotReference
   * 
   * @example
   * copilotPrecise
   */
  generateTechnology?: string;
  /**
   * @remarks
   * Configuration type. Possible values:
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
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      generateTechnology: 'GenerateTechnology',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      generateTechnology: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

