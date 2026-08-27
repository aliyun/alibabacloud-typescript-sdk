// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond timestamp format.
   * 
   * @example
   * 1718000000000
   */
  createTime?: number;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * my model
   */
  description?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * m-xxx
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * my-model
   */
  name?: string;
  /**
   * @remarks
   * The list of protocols supported by the model.
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
  /**
   * @remarks
   * The name of the model provider.
   * 
   * @example
   * my-provider
   */
  providerName?: string;
  /**
   * @remarks
   * The update time, in millisecond timestamp format.
   * 
   * @example
   * 1718000000000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      protocols: 'Protocols',
      provider: 'Provider',
      providerName: 'ProviderName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'string',
      instanceId: 'string',
      name: 'string',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      providerName: 'string',
      updateTime: 'number',
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

export class CreateModelResponseBody extends $dara.Model {
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
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: CreateModelResponseBodyData;
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
      data: CreateModelResponseBodyData,
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

