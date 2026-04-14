// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute extends $dara.Model {
  loadBalancerId?: string;
  logProject?: string;
  logStore?: string;
  logType?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logProject: 'LogProject',
      logStore: 'LogStore',
      logType: 'LogType',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logProject: 'string',
      logStore: 'string',
      logType: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes extends $dara.Model {
  logsDownloadAttribute?: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute[];
  static names(): { [key: string]: string } {
    return {
      logsDownloadAttribute: 'LogsDownloadAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logsDownloadAttribute: { 'type': 'array', 'itemType': DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributesLogsDownloadAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.logsDownloadAttribute)) {
      $dara.Model.validateArray(this.logsDownloadAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessLogsDownloadAttributeResponseBody extends $dara.Model {
  logsDownloadAttributes?: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes;
  /**
   * @remarks
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B9DB03B-ED39-5DB8-9C9F-1ED5F548D61E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logsDownloadAttributes: 'LogsDownloadAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logsDownloadAttributes: DescribeAccessLogsDownloadAttributeResponseBodyLogsDownloadAttributes,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.logsDownloadAttributes && typeof (this.logsDownloadAttributes as any).validate === 'function') {
      (this.logsDownloadAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

