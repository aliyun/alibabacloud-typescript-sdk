// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrackListByMailFromAndTagNameRequest extends $dara.Model {
  /**
   * @remarks
   * Sender address.
   * 
   * > If not filled, it represents all addresses; if there is a TagName, this parameter must not be empty.
   * 
   * @example
   * e-service@amegroups.cn
   */
  accountName?: string;
  configSetId?: string;
  dedicatedIp?: string;
  dedicatedIpPoolId?: string;
  /**
   * @remarks
   * End time, with a span from the start time that cannot exceed 15 days. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  esp?: string;
  /**
   * @remarks
   * For the first query, set to 0; for subsequent queries, fixed at 1. 1 indicates pagination in ascending order by time. (This field is deprecated)
   * 
   * @example
   * （本字段已废弃）
   */
  offset?: string;
  /**
   * @remarks
   * Used for pagination. Not set for the first query; for subsequent queries, set to the value of OffsetCreateTime from the previous response. (This field is deprecated)
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
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time, which cannot be earlier than 30 days. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * Email tag. If not filled, it represents all tags.
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

