// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The address of the model provider.
   * 
   * @example
   * https://api.example.com
   */
  address?: string;
  /**
   * @remarks
   * The time when the model provider was created.
   * 
   * @example
   * 2026-06-11T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the model provider.
   * 
   * @example
   * my provider
   */
  description?: string;
  /**
   * @remarks
   * The ID of the model provider.
   * 
   * @example
   * p-xxx
   */
  id?: string;
  /**
   * @remarks
   * The name of the model provider.
   * 
   * @example
   * my-provider
   */
  name?: string;
  /**
   * @remarks
   * The list of protocols supported by the model provider.
   * 
   * @example
   * ["openai"]
   */
  protocols?: string[];
  /**
   * @remarks
   * The provider identifier.
   * 
   * @example
   * openai
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      protocols: 'Protocols',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * {}
   */
  data?: CreateModelProviderResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: CreateModelProviderResponseBodyData,
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

