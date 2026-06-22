// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of categories.
   */
  categories?: string[];
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 3.0
   */
  dataApiVersion?: string;
  /**
   * @example
   * http://abc.com
   */
  endpointUri?: string;
  /**
   * @remarks
   * The flow ID.
   * 
   * @example
   * 92675332812643****
   */
  flowId?: string;
  /**
   * @remarks
   * The flow name.
   * 
   * @example
   * flow_001
   */
  flowName?: string;
  /**
   * @remarks
   * The JSON version.
   * 
   * @example
   * 2.1
   */
  JSONVersion?: string;
  /**
   * @remarks
   * The temporary preview URL.
   * 
   * @example
   * https://pre-url
   */
  previewUrl?: string;
  /**
   * @remarks
   * The expiration time of the preview URL.
   * 
   * @example
   * 1700617436633
   */
  previewUrlExpires?: number;
  /**
   * @remarks
   * The status of the flow.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      dataApiVersion: 'DataApiVersion',
      endpointUri: 'EndpointUri',
      flowId: 'FlowId',
      flowName: 'FlowName',
      JSONVersion: 'JSONVersion',
      previewUrl: 'PreviewUrl',
      previewUrlExpires: 'PreviewUrlExpires',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      dataApiVersion: 'string',
      endpointUri: 'string',
      flowId: 'string',
      flowName: 'string',
      JSONVersion: 'string',
      previewUrl: 'string',
      previewUrlExpires: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The error code. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DAC72B08-3327-33EF-BEDC-8EC3E83A6575
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
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

