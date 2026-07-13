// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsResponseBodyItems extends $dara.Model {
  addresses?: string[];
  createType?: string;
  deployStatus?: string;
  description?: string;
  id?: string;
  instanceId?: string;
  mcpServerConfig?: string;
  name?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createType: 'CreateType',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      mcpServerConfig: 'McpServerConfig',
      name: 'Name',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      createType: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      mcpServerConfig: 'string',
      name: 'string',
      protocol: 'string',
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

export class ListMcpsResponseBody extends $dara.Model {
  code?: string;
  items?: ListMcpsResponseBodyItems[];
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListMcpsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

