// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelServicesResponseBodyModelServices extends $dara.Model {
  aiNodes?: string[];
  /**
   * @example
   * mI3F7B18vgfqJjUtWmgITw==
   */
  apiKey?: string;
  /**
   * @example
   * 2024-09-28T02:18:39Z
   */
  createTime?: string;
  /**
   * @example
   * test description
   */
  description?: string;
  /**
   * @example
   * sambert-zhiying-v1
   */
  modelName?: string;
  modelParams?: { [key: string]: string };
  /**
   * @example
   * mx-xxxxxxxxx
   */
  modelServiceId?: string;
  /**
   * @example
   * http://ms-xxxxxxx.xxxx.rds.aliyuncs.com
   */
  privateConnUrl?: string;
  /**
   * @example
   * http://ms-xxxxxxx-o.xxxx.rds.aliyuncs.com
   */
  publicConnUrl?: string;
  /**
   * @example
   * 0.0.0.0/0
   */
  securityIPList?: string;
  /**
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
  modelServices?: ListModelServicesResponseBodyModelServices[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
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

