// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceOrderConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d9a1f6146a37446495d9985c2e7b267e_p_outbound_public
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
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
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

