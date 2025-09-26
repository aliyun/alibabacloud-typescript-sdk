// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Model extends $dara.Model {
  address?: string;
  apiKey?: string;
  createdTime?: string;
  desc?: string;
  gatewayId?: string;
  modelId?: string;
  models?: string;
  modelsWeight?: string;
  name?: string;
  provider?: string;
  targetId?: string;
  tenantId?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      apiKey: 'apiKey',
      createdTime: 'createdTime',
      desc: 'desc',
      gatewayId: 'gatewayId',
      modelId: 'modelId',
      models: 'models',
      modelsWeight: 'modelsWeight',
      name: 'name',
      provider: 'provider',
      targetId: 'targetId',
      tenantId: 'tenantId',
      type: 'type',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKey: 'string',
      createdTime: 'string',
      desc: 'string',
      gatewayId: 'string',
      modelId: 'string',
      models: 'string',
      modelsWeight: 'string',
      name: 'string',
      provider: 'string',
      targetId: 'string',
      tenantId: 'string',
      type: 'string',
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

