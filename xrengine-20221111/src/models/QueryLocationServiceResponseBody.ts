// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLocationServiceResponseBodyData extends $dara.Model {
  appId?: string;
  expireTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  imageId?: number;
  imageName?: string;
  name?: string;
  note?: string;
  qps?: number;
  startTime?: string;
  svcDeployStatus?: string;
  svcState?: string;
  treeConfig?: string;
  uuidLogMap?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      imageId: 'ImageId',
      imageName: 'ImageName',
      name: 'Name',
      note: 'Note',
      qps: 'Qps',
      startTime: 'StartTime',
      svcDeployStatus: 'SvcDeployStatus',
      svcState: 'SvcState',
      treeConfig: 'TreeConfig',
      uuidLogMap: 'UuidLogMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      imageId: 'number',
      imageName: 'string',
      name: 'string',
      note: 'string',
      qps: 'number',
      startTime: 'string',
      svcDeployStatus: 'string',
      svcState: 'string',
      treeConfig: 'string',
      uuidLogMap: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocationServiceResponseBody extends $dara.Model {
  code?: string;
  data?: QueryLocationServiceResponseBodyData;
  errorName?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorName: 'ErrorName',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryLocationServiceResponseBodyData,
      errorName: 'string',
      httpCode: 'number',
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

