// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderResponseBodyData extends $dara.Model {
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
   * The list of API keys.
   * 
   * @example
   * ["sk-xxx"]
   */
  apiKeys?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-06-11T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment status.
   * 
   * @example
   * DEPLOYED
   */
  deployStatus?: string;
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
   * The instance ID.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
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
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
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
  data?: GetModelProviderResponseBodyData;
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

