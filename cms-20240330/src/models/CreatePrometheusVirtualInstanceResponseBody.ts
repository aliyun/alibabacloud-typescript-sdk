// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusVirtualInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @example
   * 1751520976660
   */
  createdAt?: string;
  /**
   * @example
   * http://xxxxxxx
   */
  httpApiUrl?: string;
  /**
   * @example
   * rw-e815960b4c9ebc5c3d89790c7e82
   */
  instanceId?: string;
  /**
   * @example
   * ack-csi-fuse
   */
  namespace?: string;
  /**
   * @example
   * cn-zhengzhou-jva
   */
  regionId?: string;
  /**
   * @example
   * 167212345678
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      httpApiUrl: 'httpApiUrl',
      instanceId: 'instanceId',
      namespace: 'namespace',
      regionId: 'regionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      httpApiUrl: 'string',
      instanceId: 'string',
      namespace: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusVirtualInstanceResponseBody extends $dara.Model {
  instance?: CreatePrometheusVirtualInstanceResponseBodyInstance;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: CreatePrometheusVirtualInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

