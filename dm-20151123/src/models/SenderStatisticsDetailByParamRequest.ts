// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsDetailByParamRequest extends $dara.Model {
  /**
   * @remarks
   * Sending address. If not filled, it represents all addresses.
   * 
   * > **AccountName**, **TagName**, and **ToAddress** can all be left unfilled. If any are filled, only one of these parameters can be passed; you cannot pass a combination of two or more.
   * 
   * @example
   * s***@example.net
   */
  accountName?: string;
  /**
   * @remarks
   * End time. The span between start and end times cannot exceed 30 days, format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2021-04-29 00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies the number of results to return in this request. Range is 1~100.
   * 
   * @example
   * 5
   */
  length?: number;
  /**
   * @remarks
   * Used for pagination. Specifies the offset for this request. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 90f0243616#203#a***@example.net-1658817837#a***@example.net.247475288187
   */
  nextStart?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Start time. The span between start and end times cannot exceed 30 days, format: yyyy-MM-dd HH:mm
   * 
   * @example
   * 2021-04-28 00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Delivery result. If not filled, it represents all statuses. Values:
   * 
   * - 0: Success
   * - 2: Invalid Address
   * - 3: Spam
   * - 4: Failure
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Email tag. If not filled, it represents all tags.
   * 
   * @example
   * EmailQuestionnaireHelioscam
   */
  tagName?: string;
  /**
   * @remarks
   * Recipient address. If not filled, it represents all recipient addresses.
   * 
   * @example
   * b***@example.net
   */
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      endTime: 'EndTime',
      length: 'Length',
      nextStart: 'NextStart',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      status: 'Status',
      tagName: 'TagName',
      toAddress: 'ToAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      endTime: 'string',
      length: 'number',
      nextStart: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      status: 'number',
      tagName: 'string',
      toAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

