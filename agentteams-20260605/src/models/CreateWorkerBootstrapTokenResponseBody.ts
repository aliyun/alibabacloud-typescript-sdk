// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkerBootstrapTokenResponseBodyDataCms extends $dara.Model {
  endpoint?: string;
  licenseKey?: string;
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
  bootstrapToken?: string;
  cms?: CreateWorkerBootstrapTokenResponseBodyDataCms;
  instanceId?: string;
  name?: string;
  networkType?: string;
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
  code?: string;
  data?: CreateWorkerBootstrapTokenResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

