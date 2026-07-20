// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BindAuthToMachineRequestSdkRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  authVersion?: number;
  /**
   * @example
   * 1
   */
  autoBind?: number;
  bind?: string[];
  /**
   * @example
   * true
   */
  bindAll?: boolean;
  /**
   * @example
   * [{\\"name\\":\\"clientStatus\\",\\"value\\":\\"online\\"},{\\"name\\":\\"authVersion\\",\\"value\\":\\"1\\"}]
   */
  criteria?: string;
  /**
   * @example
   * 1
   */
  isPreBind?: number;
  /**
   * @example
   * AND
   */
  logicalExp?: string;
  /**
   * @example
   * level2
   */
  ntmVersion?: number;
  /**
   * @example
   * 263076506250432
   */
  preBindOrderId?: number;
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
   * @example
   * cn-shenzhen
   */
  regionId?: string;
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

