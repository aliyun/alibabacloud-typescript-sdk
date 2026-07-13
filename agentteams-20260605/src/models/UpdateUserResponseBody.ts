// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserResponseBodyData extends $dara.Model {
  authMethod?: string;
  createdAt?: string;
  displayName?: string;
  email?: string;
  instanceId?: string;
  name?: string;
  note?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      createdAt: 'CreatedAt',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      createdAt: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      name: 'string',
      note: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $dara.Model {
  code?: string;
  data?: UpdateUserResponseBodyData;
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
      data: UpdateUserResponseBodyData,
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

