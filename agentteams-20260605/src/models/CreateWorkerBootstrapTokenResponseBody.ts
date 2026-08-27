// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerBootstrapTokenResponseBodyDataCms extends $dara.Model {
  /**
   * @remarks
   * The access endpoint.
   * 
   * @example
   * https://cms-demo
   */
  endpoint?: string;
  /**
   * @remarks
   * The license key.
   * 
   * @example
   * lk-xxx
   */
  licenseKey?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * ws-demo
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      licenseKey: 'LicenseKey',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      licenseKey: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkerBootstrapTokenResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The bootstrap token.
   * 
   * @example
   * bt-xxx
   */
  bootstrapToken?: string;
  /**
   * @remarks
   * The CMS configuration.
   * 
   * @example
   * {}
   */
  cms?: CreateWorkerBootstrapTokenResponseBodyDataCms;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The Worker name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * INTRANET
   */
  networkType?: string;
  /**
   * @remarks
   * The token fingerprint.
   * 
   * @example
   * sha256:xxx
   */
  tokenFingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      bootstrapToken: 'BootstrapToken',
      cms: 'Cms',
      instanceId: 'InstanceId',
      name: 'Name',
      networkType: 'NetworkType',
      tokenFingerprint: 'TokenFingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstrapToken: 'string',
      cms: CreateWorkerBootstrapTokenResponseBodyDataCms,
      instanceId: 'string',
      name: 'string',
      networkType: 'string',
      tokenFingerprint: 'string',
    };
  }

  validate() {
    if(this.cms && typeof (this.cms as any).validate === 'function') {
      (this.cms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkerBootstrapTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: CreateWorkerBootstrapTokenResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-XX-XX-XX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateWorkerBootstrapTokenResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

