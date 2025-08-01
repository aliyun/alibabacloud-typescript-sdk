// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceFuncStatusRequestParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: GetServiceFuncStatusRequestParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: GetServiceFuncStatusRequestParams,
      serviceName: 'string',
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

