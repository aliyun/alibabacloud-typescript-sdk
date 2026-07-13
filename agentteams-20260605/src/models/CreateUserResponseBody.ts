// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyData extends $dara.Model {
  authMethod?: string;
  displayName?: string;
  email?: string;
  initialPassword?: string;
  instanceId?: string;
  name?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      displayName: 'DisplayName',
      email: 'Email',
      initialPassword: 'InitialPassword',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      displayName: 'string',
      email: 'string',
      initialPassword: 'string',
      instanceId: 'string',
      name: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $dara.Model {
  code?: string;
  data?: CreateUserResponseBodyData;
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
      data: CreateUserResponseBodyData,
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

