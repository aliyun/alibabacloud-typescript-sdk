// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of AI nodes.
   */
  aiNodes?: string[];
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * cx/Y57lTNf*********
   */
  apiKey?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @remarks
   * Model parameters.
   */
  modelParams?: { [key: string]: any };
  /**
   * @remarks
   * The model service ID.
   * 
   * @example
   * ms-xxxxxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * http://ms-xxxxxxx.xxxx.rds.aliyuncs.com
   */
  privateConnectUrl?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * http://ms-xxxxxxx-o.xxxx.rds.aliyuncs.com
   */
  publicConnectUrl?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * A comma-separated list of IP addresses and CIDR blocks allowed to connect.
   * 
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @remarks
   * The status of the model service.
   * 
   * @example
   * - deployming
   * - active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodes: 'AiNodes',
      apiKey: 'ApiKey',
      createTime: 'CreateTime',
      description: 'Description',
      modelName: 'ModelName',
      modelParams: 'ModelParams',
      modelServiceId: 'ModelServiceId',
      privateConnectUrl: 'PrivateConnectUrl',
      publicConnectUrl: 'PublicConnectUrl',
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodes: { 'type': 'array', 'itemType': 'string' },
      apiKey: 'string',
      createTime: 'string',
      description: 'string',
      modelName: 'string',
      modelParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelServiceId: 'string',
      privateConnectUrl: 'string',
      publicConnectUrl: 'string',
      requestId: 'string',
      securityIpList: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiNodes)) {
      $dara.Model.validateArray(this.aiNodes);
    }
    if(this.modelParams) {
      $dara.Model.validateMap(this.modelParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

