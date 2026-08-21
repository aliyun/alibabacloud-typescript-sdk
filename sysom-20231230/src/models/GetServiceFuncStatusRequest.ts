// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusRequestParams extends $dara.Model {
  /**
   * @remarks
   * The feature name.
   * 
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1338904783509062
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'function_name',
      instance: 'instance',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      instance: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The diagnostic parameters. Different types of diagnostics require different diagnostic parameters. You can use this field to filter records whose parameters match the specified values.
   * 
   * This parameter is required.
   */
  params?: GetServiceFuncStatusRequestParams;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      channel: 'string',
      params: GetServiceFuncStatusRequestParams,
      serviceName: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

