// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectMetaResponseBodyResourcesResource extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * CDN
   */
  description?: string;
  /**
   * @remarks
   * The tags. Tags are used to filter services.
   * 
   * Tags are returned in the following format: `[{"name":"Tag key","value":"Tag value"}, {"name":"Tag key","value":"Tag value"}]`. The following tags are commonly used:
   * 
   * *   alertUnit: the unit of the metric value in alerts. If the unit is small, the original metric value may be too large. In this case, you can use the `alertUnit` tag to specify an appropriate unit. This tag is used in CloudMonitor.
   * *   minAlertPeriod: the minimum time interval to report a new alert. The interval at which monitoring data is reported. The value is usually 1 minute.
   * *   metricCategory: the service specification. Example: kvstore_sharding. Some Alibaba Cloud services have multiple specifications that are defined in the same namespace. This parameter is used to identify the specifications.
   * *   is_alarm: indicates whether an alert rule can be configured. We recommend that you do not use the special tags in the CloudMonitor console.
   * 
   * @example
   * [{"groupFlag":true}]
   */
  labels?: string;
  /**
   * @remarks
   * The namespace of the cloud service. Format: `acs_Service name abbreviation`. For more information about namespaces, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_cdn
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBodyResources extends $dara.Model {
  resource?: DescribeProjectMetaResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeProjectMetaResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C2061B2-3B1B-43BF-A4A4-C53426F479C0
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the cloud service.
   */
  resources?: DescribeProjectMetaResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      resources: DescribeProjectMetaResponseBodyResources,
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

