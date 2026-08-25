// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelConnectionRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKeys?: string[];
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen
   */
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

export class CreateModelConnectionRequest extends $dara.Model {
  body?: CreateModelConnectionRequestBody;
  /**
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateModelConnectionRequestBody,
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

