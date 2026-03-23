// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListByMailFromAndTagNameRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address.
   * 
   * > If you leave this parameter empty, data for all addresses is returned. This parameter is required if you specify TagName.
   * 
   * @example
   * e-service@amegroups.cn
   */
  accountName?: string;
  /**
   * @remarks
   * The configuration set ID.
   * 
   * @example
   * xxx
   */
  configSetId?: string;
  /**
   * @remarks
   * The dedicated IP address. This parameter is available only for users of dedicated IPs.
   * 
   * If you do not specify this parameter, data for all IPs is returned.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   */
  dedicatedIp?: string;
  /**
   * @remarks
   * The ID of the dedicated IP pool. This parameter is available only for users of dedicated IPs.
   * 
   * If you do not specify this parameter, data for all IP pools is returned.
   * 
   * @example
   * xxx
   */
  dedicatedIpPoolId?: string;
  /**
   * @remarks
   * The end time. The time span between the start time and end time cannot exceed 15 days. The format is yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * The Email Service Provider (ESP). This parameter is available only for users of dedicated IPs. Valid values:
   * 
   * - gmail.com
   * 
   * - yahoo.com
   * 
   * - outlook.com
   * 
   * - icloud.com
   * 
   * - others (data for ESPs other than the ones listed above)
   * 
   * If you do not specify this parameter, data for all ESPs is returned.
   * 
   * @example
   * gmail.com
   */
  esp?: string;
  /**
   * @remarks
   * The value is 0 for the first query and 1 for subsequent queries. A value of 1 indicates a paged query in chronological order. (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offset?: string;
  /**
   * @remarks
   * Used for paging. Do not set this parameter for the first query. For subsequent queries, set this parameter to the OffsetCreateTime value from the previous response. (This field is deprecated)
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
   * The current page number.
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
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time. The time cannot be earlier than 30 days ago. The format is yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * The email tag. If you leave this parameter empty, data for all tags is returned.
   * 
   * @example
   * Subscription
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

