// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDataSourceConnectivityRequestCheckCommandConfigItemList extends $dara.Model {
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

export class CheckDataSourceConnectivityRequestCheckCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configItemList?: CheckDataSourceConnectivityRequestCheckCommandConfigItemList[];
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
      configItemList: 'ConfigItemList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configItemList: { 'type': 'array', 'itemType': CheckDataSourceConnectivityRequestCheckCommandConfigItemList },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configItemList)) {
      $dara.Model.validateArray(this.configItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataSourceConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  checkCommand?: CheckDataSourceConnectivityRequestCheckCommand;
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
      checkCommand: CheckDataSourceConnectivityRequestCheckCommand,
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

