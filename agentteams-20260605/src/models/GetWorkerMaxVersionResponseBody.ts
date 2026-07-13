// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerMaxVersionResponseBodyData extends $dara.Model {
  instanceId?: string;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerMaxVersionResponseBody extends $dara.Model {
  code?: string;
  data?: GetWorkerMaxVersionResponseBodyData;
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
      data: GetWorkerMaxVersionResponseBodyData,
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

