// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckComputeSourceConnectivityRequestCheckCommandConfigList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComputeSourceConnectivityRequestCheckCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configList?: CheckComputeSourceConnectivityRequestCheckCommandConfigList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': CheckComputeSourceConnectivityRequestCheckCommandConfigList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckComputeSourceConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommand?: CheckComputeSourceConnectivityRequestCheckCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      checkCommand: 'CheckCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCommand: CheckComputeSourceConnectivityRequestCheckCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.checkCommand && typeof (this.checkCommand as any).validate === 'function') {
      (this.checkCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

