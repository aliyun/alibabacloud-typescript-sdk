// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderResponseBodyData extends $dara.Model {
  address?: string;
  apiKeys?: string[];
  createTime?: string;
  deployStatus?: string;
  description?: string;
  id?: string;
  instanceId?: string;
  name?: string;
  protocols?: string[];
  provider?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      apiKeys: 'ApiKeys',
      createTime: 'CreateTime',
      deployStatus: 'DeployStatus',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      protocols: 'Protocols',
      provider: 'Provider',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      deployStatus: 'string',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelProviderResponseBody extends $dara.Model {
  code?: string;
  data?: GetModelProviderResponseBodyData;
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
      data: GetModelProviderResponseBodyData,
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

