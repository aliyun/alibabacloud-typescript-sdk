// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The evaluation result. Valid values:
   * 
   * *   **report**: Risks exist in cross-border data transfer.
   * *   **none**: No risks exist in cross-border data transfer.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 546
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of data entries that are transferred across borders.
   * 
   * @example
   * 300
   */
  outboundCount?: number;
  /**
   * @remarks
   * The type of the sensitive data.
   * 
   * >  You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported types of sensitive data.
   * 
   * @example
   * 1001
   */
  sensitiveCode?: number;
  /**
   * @remarks
   * The sensitivity level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of the information. Valid values:
   * 
   * *   **info**: full personal information
   * *   **sensitive**: sensitive personal information
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
   * The data types of personal information involved in cross-border data transfer.
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
   * The total number of entries returned.
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

