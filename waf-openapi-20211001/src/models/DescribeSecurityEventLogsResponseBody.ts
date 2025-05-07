// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventLogsResponseBodySecurityEventMetaData } from "./DescribeSecurityEventLogsResponseBodySecurityEventMetaData";


export class DescribeSecurityEventLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The attack logs returned.
   */
  securityEventLogs?: any[];
  /**
   * @remarks
   * The total number of logs returned.
   * 
   * @example
   * 1000
   */
  securityEventLogsTotalCount?: number;
  /**
   * @remarks
   * The metadata of the time series data returned.
   */
  securityEventMetaData?: DescribeSecurityEventLogsResponseBodySecurityEventMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventLogs: 'SecurityEventLogs',
      securityEventLogsTotalCount: 'SecurityEventLogsTotalCount',
      securityEventMetaData: 'SecurityEventMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventLogs: { 'type': 'array', 'itemType': 'any' },
      securityEventLogsTotalCount: 'number',
      securityEventMetaData: DescribeSecurityEventLogsResponseBodySecurityEventMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventLogs)) {
      $dara.Model.validateArray(this.securityEventLogs);
    }
    if(this.securityEventMetaData && typeof (this.securityEventMetaData as any).validate === 'function') {
      (this.securityEventMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

