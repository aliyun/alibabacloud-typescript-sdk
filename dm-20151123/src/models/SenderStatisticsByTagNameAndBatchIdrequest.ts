// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsByTagNameAndBatchIDRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address. If you do not specify this parameter, statistics for all sender addresses are returned.
   * 
   * @example
   * xxx
   */
  accountName?: string;
  /**
   * @remarks
   * If you use Dedicated IPs, use this parameter to filter statistics by a specific Dedicated IP.
   * 
   * If you do not specify this parameter, statistics for all dedicated IPs that match the other criteria are returned.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   */
  dedicatedIp?: string;
  /**
   * @remarks
   * If you use Dedicated IPs, specify the ID of the dedicated IP pool to query.
   * 
   * If you do not specify this parameter, statistics for all resources are returned.
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
   * The end time for the query. The time range between `StartTime` and `EndTime` cannot exceed 7 days. The format must be `YYYY-MM-DD`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * If you use Dedicated IPs, use this parameter to filter statistics by a specific Email Service Provider (ESP). Valid values are:
   * 
   * - `gmail.com`
   * 
   * - `yahoo.com`
   * 
   * - `outlook.com`
   * 
   * - `icloud.com`
   * 
   * - `others` (matches data for all other ESPs)
   * 
   * If you do not specify this parameter, statistics for all ESPs are returned.
   * 
   * @example
   * gmail.com
   */
  esp?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time for the query. The date cannot be more than 30 days in the past. The format must be `YYYY-MM-DD`.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * The email tag. If you do not specify this parameter, statistics for all tags are returned.
   * 
   * @example
   * xxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dedicatedIp: 'DedicatedIp',
      dedicatedIpPoolId: 'DedicatedIpPoolId',
      domain: 'Domain',
      endTime: 'EndTime',
      esp: 'Esp',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dedicatedIp: 'string',
      dedicatedIpPoolId: 'string',
      domain: 'string',
      endTime: 'string',
      esp: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

