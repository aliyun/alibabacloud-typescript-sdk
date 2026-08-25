// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelConnectionResponseBodyData extends $dara.Model {
  apiKeyCount?: number;
  connectionId?: string;
  createdAt?: string;
  credentialConfigured?: boolean;
  description?: string;
  endpoint?: string;
  name?: string;
  protocol?: string;
  providerType?: string;
  status?: string;
  statusReason?: string;
  updatedAt?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyCount: 'apiKeyCount',
      connectionId: 'connectionId',
      createdAt: 'createdAt',
      credentialConfigured: 'credentialConfigured',
      description: 'description',
      endpoint: 'endpoint',
      name: 'name',
      protocol: 'protocol',
      providerType: 'providerType',
      status: 'status',
      statusReason: 'statusReason',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyCount: 'number',
      connectionId: 'string',
      createdAt: 'string',
      credentialConfigured: 'boolean',
      description: 'string',
      endpoint: 'string',
      name: 'string',
      protocol: 'string',
      providerType: 'string',
      status: 'string',
      statusReason: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelConnectionResponseBody extends $dara.Model {
  code?: string;
  data?: UpdateModelConnectionResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateModelConnectionResponseBodyData,
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

