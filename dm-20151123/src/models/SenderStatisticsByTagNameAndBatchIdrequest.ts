// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsByTagNameAndBatchIDRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address. If this parameter is not specified, data for all addresses is returned.
   * 
   * @example
   * xxx
   */
  accountName?: string;
  /**
   * @remarks
   * For dedicated IP users, specifies a dedicated IP address to query data for.
   * 
   * If this parameter is not specified, data for all dedicated IP addresses is returned.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   */
  dedicatedIp?: string;
  /**
   * @remarks
   * For dedicated IP users, specifies the ID of a dedicated IP pool to query data for.
   * 
   * If this parameter is not specified, data for all dedicated IP pools is returned.
   * 
   * @example
   * xxx
   */
  dedicatedIpPoolId?: string;
  /**
   * @remarks
   * The sender domain name.
   * 
   * @example
   * dmdomain.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time. The time span between the start time and end time cannot exceed 31 days. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  endTime?: string;
  /**
   * @remarks
   * For dedicated IP users, specifies a particular ESP to query data for. Valid values:
   * - gmail.com
   * - yahoo.com
   * - outlook.com
   * - icloud.com
   * - others: data for ESPs other than the ones listed above.
   * 
   * If this parameter is not specified, data for all ESPs is returned.
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
   * The start time. The time cannot be earlier than 90 days ago. Format: yyyy-MM-dd.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-29
   */
  startTime?: string;
  /**
   * @remarks
   * The email tag. If this parameter is not specified, data for all tags is returned.
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

