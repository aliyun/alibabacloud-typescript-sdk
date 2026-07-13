// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyDataBoundWorkers extends $dara.Model {
  name?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBodyData extends $dara.Model {
  boundWorkers?: GetCredentialResponseBodyDataBoundWorkers[];
  createTime?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  regionId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      boundWorkers: 'BoundWorkers',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundWorkers: { 'type': 'array', 'itemType': GetCredentialResponseBodyDataBoundWorkers },
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boundWorkers)) {
      $dara.Model.validateArray(this.boundWorkers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBody extends $dara.Model {
  code?: string;
  data?: GetCredentialResponseBodyData;
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
      data: GetCredentialResponseBodyData,
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

