// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICallDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The business edition. Valid values: ENTERPRISE or 1 for Enterprise Edition, and BUSINESS or 20 for Business Edition. Default value: Enterprise Edition.
   * 
   * @example
   * ENTERPRISE
   */
  bizType?: string;
  /**
   * @remarks
   * The end time of the query, exclusive. Specify the time in ISO 8601 format with time zone, accurate to seconds. Default value: the current time. The end time must be later than StartTime and cannot be later than the current time.
   * 
   * @example
   * 2026-11-06T00:00:00+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The region of the AI gateway logs. Valid values: cn-shanghai (Shanghai), cn-hongkong (Hong Kong), ap-southeast-1 (Singapore), and us-east-1 (US East). The cn-hangzhou value is also supported and routed to cn-shanghai in the production environment. If this parameter is not specified, the default value is cn-shanghai for the China site and ap-southeast-1 for the international site.
   * 
   * @example
   * cn-shanghai
   */
  gatewayRegion?: string;
  /**
   * @remarks
   * The requested model ID during invocation for exact match. Fuzzy match is not supported. This ID may be different from the actual executed model Model returned in the response. If this parameter is not specified or is left empty, no filtering is performed. The value can be up to 128 characters in length and cannot contain control characters or vertical bars.
   * 
   * @example
   * example-model
   */
  modelId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1. The product of PageNumber and PageSize cannot exceed 1,000,000.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The model invocation request ID for exact match. This ID is different from the RequestId of the current API operation. If this parameter is not specified or is left empty, no filtering is performed. The value can be up to 128 characters in length and cannot contain control characters or vertical bars. This condition is combined with other filter conditions by using the AND operator.
   * 
   * @example
   * model-call-example-001
   */
  searchRequestId?: string;
  /**
   * @remarks
   * The start time of the query, inclusive. Specify the time in ISO 8601 format with time zone, accurate to seconds. Default value: 00:00:00 (UTC+8) of the current day. The start time cannot be earlier than three calendar months before the current time, and the query time range cannot exceed 30 days.
   * 
   * @example
   * 2026-11-05T00:00:00+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The list of user IDs. You can specify up to 50 user IDs. If this parameter is not specified or an empty array is passed, no filtering is performed. The user IDs in the list are combined by using the OR operator, and this condition is combined with other filter conditions by using the AND operator.
   * 
   * @example
   * ["wy-example-001"]
   */
  wyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endTime: 'EndTime',
      gatewayRegion: 'GatewayRegion',
      modelId: 'ModelId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchRequestId: 'SearchRequestId',
      startTime: 'StartTime',
      wyIds: 'WyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endTime: 'string',
      gatewayRegion: 'string',
      modelId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchRequestId: 'string',
      startTime: 'string',
      wyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.wyIds)) {
      $dara.Model.validateArray(this.wyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

