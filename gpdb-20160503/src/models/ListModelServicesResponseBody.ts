// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelServicesResponseBodyModelServices extends $dara.Model {
  /**
   * @remarks
   * A list of AI nodes for model deployment.
   */
  aiNodes?: string[];
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * mI3F7B18vgfqJjUtWmgITw==
   */
  apiKey?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-09-28T02:18:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * sambert-zhiying-v1
   */
  modelName?: string;
  /**
   * @remarks
   * Model service parameters (not available).
   */
  modelParams?: { [key: string]: string };
  /**
   * @remarks
   * Model service ID.
   * 
   * @example
   * mx-xxxxxxxxx
   */
  modelServiceId?: string;
  /**
   * @remarks
   * Private Endpoint.
   * 
   * @example
   * http://ms-xxxxxxx.xxxx.rds.aliyuncs.com
   */
  privateConnUrl?: string;
  /**
   * @remarks
   * Public endpoint.
   * 
   * @example
   * http://ms-xxxxxxx-o.xxxx.rds.aliyuncs.com
   */
  publicConnUrl?: string;
  /**
   * @remarks
   * The IP addresses listed in the whitelist. Up to 1,000 IP addresses are contained in a whitelist and separated by commas (,). The IP addresses must use one of the following formats:
   * 
   * *   0.0.0.0/0
   * *   10.23.12.24(IP)
   * *   10.23.12.24/24 (This is a CIDR block. The value`/24`indicates the network prefix length, which must be an integer and in the range of `[1,32]`.)
   * 
   * @example
   * 0.0.0.0/0
   */
  securityIPList?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
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
      privateConnUrl: 'PrivateConnUrl',
      publicConnUrl: 'PublicConnUrl',
      securityIPList: 'SecurityIPList',
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
      modelParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      modelServiceId: 'string',
      privateConnUrl: 'string',
      publicConnUrl: 'string',
      securityIPList: 'string',
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

export class ListModelServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Model services.
   */
  modelServices?: ListModelServicesResponseBodyModelServices[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
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
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      modelServices: 'ModelServices',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServices: { 'type': 'array', 'itemType': ListModelServicesResponseBodyModelServices },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelServices)) {
      $dara.Model.validateArray(this.modelServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

