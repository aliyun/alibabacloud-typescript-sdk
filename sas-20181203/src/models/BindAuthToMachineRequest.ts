// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The edition of Security Center that is authorized to scan the asset. Valid values:
   * 
   * *   **6**: Anti-virus
   * *   **5**: Advanced
   * *   **3**: Enterprise
   * *   **7**: Ultimate
   * *   **10**: Value-added Plan
   * 
   * @example
   * 6
   */
  authVersion?: number;
  /**
   * @remarks
   * Specifies whether to automatically bind servers to Security Center. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * The UUIDs of the servers that you want to bind to Security Center.
   * 
   * >  You must specify at least one of the **Bind** and **UnBind** parameters.
   */
  bind?: string[];
  /**
   * @remarks
   * Specifies whether to bind all servers to Security Center. Default value: **false**. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The search conditions that are used to filter servers. The value of this parameter is in the JSON format and is case-sensitive.
   * 
   * >  A search condition can be an instance ID, instance name, virtual private cloud (VPC) ID, region, or public IP address. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Specifies whether to specify servers for protection when you purchase Security Center. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * >  If you specify servers, the servers are automatically added to Security Center for protection after the purchase order is complete.
   * 
   * @example
   * 1
   */
  isPreBind?: number;
  /**
   * @remarks
   * The logical relationship that you want to use to evaluate multiple search conditions. Default value: **OR**. Valid values:
   * 
   * *   **OR**
   * *   **AND**
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The edition of Security Center that you purchase in the order. Valid values:
   * 
   * *   **level7**: Anti-virus
   * *   **level3**: Advanced
   * *   **level2**: Enterprise
   * *   **level8**: Ultimate
   * *   **level10**: Value-added Plan
   * 
   * @example
   * level2
   */
  ntmVersion?: string;
  /**
   * @remarks
   * The ID of the order in which Security Center is purchased and servers are specified for protection.
   * 
   * @example
   * 233016**0482
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * The UUIDs of the servers that you want to unbind from Security Center.
   * 
   * >  You must specify at least one of the **Bind** and **UnBind** parameters.
   */
  unBind?: string[];
  static names(): { [key: string]: string } {
    return {
      authVersion: 'AuthVersion',
      autoBind: 'AutoBind',
      bind: 'Bind',
      bindAll: 'BindAll',
      criteria: 'Criteria',
      isPreBind: 'IsPreBind',
      logicalExp: 'LogicalExp',
      ntmVersion: 'NtmVersion',
      preBindOrderId: 'PreBindOrderId',
      unBind: 'UnBind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authVersion: 'number',
      autoBind: 'number',
      bind: { 'type': 'array', 'itemType': 'string' },
      bindAll: 'boolean',
      criteria: 'string',
      isPreBind: 'number',
      logicalExp: 'string',
      ntmVersion: 'string',
      preBindOrderId: 'number',
      unBind: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bind)) {
      $dara.Model.validateArray(this.bind);
    }
    if(Array.isArray(this.unBind)) {
      $dara.Model.validateArray(this.unBind);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

