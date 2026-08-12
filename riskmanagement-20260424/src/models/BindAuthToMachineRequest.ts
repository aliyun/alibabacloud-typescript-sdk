// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindAuthToMachineRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * 
   * - **6**: Anti-virus Edition
   * - **5**: Advanced Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added Service Edition
   * 
   * @example
   * 3
   */
  authVersion?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic binding. Valid values:
   * 
   * - **0**: disabled
   * - **1**: enabled
   * 
   * @example
   * 1
   */
  autoBind?: number;
  /**
   * @remarks
   * The collection of UUIDs to bind.
   * 
   * > Bind and UnBind cannot both be empty.
   * Maximum number of child entries: 1000.
   */
  bind?: string[];
  /**
   * @remarks
   * Specifies whether to bind all assets. Default value: **false**. Valid values:
   * 
   * - **true**: yes
   * - **false**: no
   * 
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Pay attention to the letter case when you specify this parameter.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. You can call the DescribeCriteria operation to query the supported search conditions.
   * 
   * @example
   * [{\\"name\\":\\"clientStatus\\",\\"value\\":\\"online\\"},{\\"name\\":\\"authVersion\\",\\"value\\":\\"1\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * Specifies whether this is a pre-binding operation. Valid values:
   * 
   * - **0**: no
   * - **1**: yes
   * 
   * > After pre-binding is enabled, the corresponding authorization quota is automatically bound to the specified servers after the purchase is completed.
   * 
   * @example
   * 1
   */
  isPreBind?: number;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: The search conditions are in an **OR** relationship.
   * - **AND**: The search conditions are in an **AND** relationship.
   * 
   * @example
   * AND
   */
  logicalExp?: string;
  /**
   * @remarks
   * The order version associated with the pre-binding. Valid values:
   * 
   * - **level7**: Anti-virus Edition
   * - **level3**: Advanced Edition
   * - **level2**: Enterprise Edition
   * - **level8**: Ultimate Edition
   * - **level10**: value-added service only
   * 
   * @example
   * level2
   */
  ntmVersion?: number;
  /**
   * @remarks
   * The order ID associated with the pre-binding.
   * > Note: This field is of the Long type. Precision loss may occur during the sequence/deserialization procedure. The value must not exceed 9007199254740991.
   * 
   * @example
   * 263076506250432
   */
  preBindOrderId?: number;
  /**
   * @remarks
   * The collection of UUIDs to unbind.
   * > **Bind** and **UnBind** cannot both be empty.
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
      ntmVersion: 'number',
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

export class BindAuthToMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequest?: BindAuthToMachineRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: BindAuthToMachineRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

