// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpResponseBodyData extends $dara.Model {
  addresses?: string[];
  authConfig?: string;
  authEnabled?: boolean;
  createType?: string;
  deployStatus?: string;
  description?: string;
  id?: string;
  mcpServerConfig?: string;
  name?: string;
  protocol?: string;
  swaggerConfig?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      authConfig: 'AuthConfig',
      authEnabled: 'AuthEnabled',
      createType: 'CreateType',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      mcpServerConfig: 'McpServerConfig',
      name: 'Name',
      protocol: 'Protocol',
      swaggerConfig: 'SwaggerConfig',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      authConfig: 'string',
      authEnabled: 'boolean',
      createType: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      mcpServerConfig: 'string',
      name: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBody extends $dara.Model {
  code?: string;
  data?: GetMcpResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMcpResponseBodyData,
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

