// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineWithAssetsCodeVersionResponseBodyOssPostConfig extends $dara.Model {
  key?: string;
  OSSAccessKeyId?: string;
  policy?: string;
  signature?: string;
  url?: string;
  XOssSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      OSSAccessKeyId: 'OSSAccessKeyId',
      policy: 'Policy',
      signature: 'Signature',
      url: 'Url',
      XOssSecurityToken: 'XOssSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      OSSAccessKeyId: 'string',
      policy: 'string',
      signature: 'string',
      url: 'string',
      XOssSecurityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoutineWithAssetsCodeVersionResponseBody extends $dara.Model {
  codeVersion?: string;
  ossPostConfig?: CreateRoutineWithAssetsCodeVersionResponseBodyOssPostConfig;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      ossPostConfig: 'OssPostConfig',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      ossPostConfig: CreateRoutineWithAssetsCodeVersionResponseBodyOssPostConfig,
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.ossPostConfig && typeof (this.ossPostConfig as any).validate === 'function') {
      (this.ossPostConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

