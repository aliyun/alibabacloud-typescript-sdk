// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelConnectionRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of API keys used to access the upstream model service. The list must contain at least one non-empty value.
   * 
   * This parameter is required.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * The description of the model connection. The description can be up to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The absolute HTTP or HTTPS address of the upstream model service. The address can be up to 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The model connection name. The name must be 1 to 128 non-whitespace characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The model invoke protocol. Currently, only OpenAI/v1 is supported. If this parameter is not configured in Settings during model creation, this default value is used.
   * 
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * The model provider type.
   * 
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
  /**
   * @remarks
   * The request body.
   */
  body?: CreateModelConnectionRequestBody;
  /**
   * @remarks
   * The client token used for idempotence. Not supported.
   * 
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

