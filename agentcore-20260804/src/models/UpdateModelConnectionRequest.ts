// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelConnectionRequestBody extends $dara.Model {
  apiKeys?: string[];
  description?: string;
  endpoint?: string;
  name?: string;
  protocol?: string;
  providerType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      description: 'description',
      endpoint: 'endpoint',
      name: 'name',
      protocol: 'protocol',
      providerType: 'providerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      endpoint: 'string',
      name: 'string',
      protocol: 'string',
      providerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelConnectionRequest extends $dara.Model {
  body?: UpdateModelConnectionRequestBody;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateModelConnectionRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

