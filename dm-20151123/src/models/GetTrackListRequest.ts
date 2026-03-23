// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address.
   * 
   * > If you omit this parameter, the query returns data for all sender addresses. This parameter is required if you specify the `TagName` parameter.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the configuration set.
   * 
   * @example
   * xxx
   */
  configSetId?: string;
  /**
   * @remarks
   * The dedicated IP address to query.
   * 
   * If this parameter is omitted, data for all dedicated IPs is returned.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   */
  dedicatedIp?: string;
  /**
   * @remarks
   * The ID of the dedicated IP pool to query.
   * 
   * If this parameter is omitted, data for all IP pools is returned.
   * 
   * @example
   * xxx
   */
  dedicatedIpPoolId?: string;
  /**
   * @example
   * dmdomain.com
   */
  domain?: string;
  /**
   * @remarks
   * The end date of the query. The duration between the StartTime and EndTime cannot exceed 7 days. The format is `yyyy-MM-dd`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * The Email Service Provider (ESP) to query. Valid values are:
   * 
   * - gmail.com
   * 
   * - yahoo.com
   * 
   * - outlook.com
   * 
   * - icloud.com
   * 
   * - Others: Any ESP not listed above.
   * 
   * If you omit this parameter, the query returns data for all ESPs.
   * 
   * @example
   * gmail.com
   */
  esp?: string;
  /**
   * @remarks
   * Set this to 0 for the first query. For subsequent queries, set it to 1 to perform a paged query in chronological order. (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offset?: string;
  /**
   * @remarks
   * Used for pagination. Do not set this parameter for the first query. For subsequent queries, set this parameter to the `OffsetCreateTime` value returned in the previous response. (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offsetCreateTime?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offsetCreateTimeDesc?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start date of the query. The date must be within the last 30 days. The format is `yyyy-MM-dd`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * tagname
   */
  tagName?: string;
  /**
   * @remarks
   * (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      configSetId: 'ConfigSetId',
      dedicatedIp: 'DedicatedIp',
      dedicatedIpPoolId: 'DedicatedIpPoolId',
      domain: 'Domain',
      endTime: 'EndTime',
      esp: 'Esp',
      offset: 'Offset',
      offsetCreateTime: 'OffsetCreateTime',
      offsetCreateTimeDesc: 'OffsetCreateTimeDesc',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tagName: 'TagName',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      configSetId: 'string',
      dedicatedIp: 'string',
      dedicatedIpPoolId: 'string',
      domain: 'string',
      endTime: 'string',
      esp: 'string',
      offset: 'string',
      offsetCreateTime: 'string',
      offsetCreateTimeDesc: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tagName: 'string',
      total: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

