// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The assessment result. Valid values:
   * - **report**: Outbound data risks exist.
   * - **none**: No outbound data risks exist.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The total number of data records.
   * 
   * @example
   * 546
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of outbound data records.
   * 
   * @example
   * 300
   */
  outboundCount?: number;
  /**
   * @remarks
   * The sensitive data type.
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * 1001
   */
  sensitiveCode?: number;
  /**
   * @remarks
   * The sensitivity level. Valid values: 
   * - **high**: high sensitivity
   * - **medium**: medium sensitivity
   * - **low**: low sensitivity
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of queried information. Valid values: 
   * - **info**: all personal information
   * - **sensitive**: only sensitive personal information
   * 
   * @example
   * info
   */
  sensitiveType?: string;
  static names(): { [key: string]: string } {
    return {
      detectionResult: 'DetectionResult',
      infoCount: 'InfoCount',
      outboundCount: 'OutboundCount',
      sensitiveCode: 'SensitiveCode',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionResult: 'string',
      infoCount: 'number',
      outboundCount: 'number',
      sensitiveCode: 'number',
      sensitiveLevel: 'string',
      sensitiveType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveOutboundStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of statistics on the types of outbound personal information.
   */
  data?: DescribeSensitiveOutboundStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveOutboundStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

