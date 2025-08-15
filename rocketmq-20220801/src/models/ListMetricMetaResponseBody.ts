// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetricMetaResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Monitoring item tag
   * 
   * @example
   * Bug
   */
  category?: string;
  /**
   * @remarks
   * Monitoring item description
   * 
   * @example
   * Using Serverless Devs to deploy the infrastructure of project:get-userinfo-v1-infrastructure-as-template-project
   */
  description?: string;
  /**
   * @remarks
   * Monitoring item name
   * 
   * @example
   * SendMessageCountPerInstance
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      metricName: 'metricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      metricName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Paged data
   */
  list?: ListMetricMetaResponseBodyDataList[];
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total record count
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMetricMetaResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * Return result
   */
  data?: ListMetricMetaResponseBodyData;
  /**
   * @remarks
   * Dynamic error code
   * 
   * @example
   * xxx
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * xxx
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 8B459455-4A35-5796-BA9D-98EF1AB9A931
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListMetricMetaResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
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

