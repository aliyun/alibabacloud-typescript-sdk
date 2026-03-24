// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The assessment result. Valid values:
   * 
   * - **report**: a data outbound transfer threat exists.
   * 
   * - **none**: no data outbound transfer threat exists.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The total number of personal information data entries detected.
   * 
   * @example
   * 546
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of outbound transfer data entries for the sensitive data type.
   * 
   * @example
   * 300
   */
  outboundCount?: number;
  /**
   * @remarks
   * The code that represents the type of sensitive data.
   * 
   * > Call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to obtain the supported sensitive data types.
   * 
   * @example
   * 1001
   */
  sensitiveCode?: number;
  /**
   * @remarks
   * The sensitivity level. Valid values:
   * 
   * - **high**: high.
   * 
   * - **medium**: medium.
   * 
   * - **low**: low.
   * 
   * @example
   * high
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of information. Valid values:
   * 
   * - **info**: all personal information.
   * 
   * - **sensitive**: only sensitive personal information.
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
   * The list of statistics on outbound transfers of personal information.
   */
  data?: DescribeSensitiveOutboundStatisticResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2EFCFE18-78F8-5079-B312-07***48B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned for outbound transfer statistics.
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

