// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SenderStatisticsDetailByParamRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address. If you leave this parameter empty, emails from all sender addresses are queried.
   * 
   * > You can leave **AccountName**, **TagName**, and **ToAddress** empty. You can specify a value for only one of these parameters at a time.
   * 
   * @example
   * s***@example.net
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the configuration set.
   * 
   * @example
   * 95437e39-5433-4c6c-8b66-0c4eac2f4d97
   * 
   * **if can be null:**
   * true
   */
  configSetId?: string;
  /**
   * @remarks
   * The end time. The time range between the start time and the end time cannot exceed 30 days. The format is yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2021-04-29 00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the independent IP address pool.
   * 
   * @example
   * e42a4d8e-66e0-4ea3-88aa-74c66c661cef
   * 
   * **if can be null:**
   * true
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The number of results to return. The value can range from 1 to 100.
   * 
   * @example
   * 5
   */
  length?: number;
  /**
   * @remarks
   * The offset for this request, used for paging. If more results are available, set the \\`NextStart\\` parameter in your next request to this return value.
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
   * The start time. The time range between the start time and the end time cannot exceed 30 days. The format is yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2021-04-28 00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The delivery status. If you leave this parameter empty, emails in all delivery statuses are queried. Valid values:
   * 
   * - 0: delivered successfully
   * 
   * - 2: invalid address
   * 
   * - 3: spam
   * 
   * - 4: failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The email tag. If you leave this parameter empty, emails with all tags are queried.
   * When you send an email using SMTP, specify the \\`TagName\\` and its value for the \\`X-AliDM-Trace\\` field. For more information, see the examples for email tracking.
   * 
   * @example
   * EmailQuestionnaireHelioscam
   */
  tagName?: string;
  /**
   * @remarks
   * The recipient address. If you leave this parameter empty, emails sent to all recipient addresses are queried.
   * 
   * @example
   * b***@example.net
   */
  toAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      configSetId: 'ConfigSetId',
      endTime: 'EndTime',
      ipPoolId: 'IpPoolId',
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
      configSetId: 'string',
      endTime: 'string',
      ipPoolId: 'string',
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

