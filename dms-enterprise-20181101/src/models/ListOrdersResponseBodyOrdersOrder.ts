// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersResponseBodyOrdersOrder extends $dara.Model {
  /**
   * @remarks
   * The remarks of the ticket.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The user who submitted the ticket.
   * 
   * @example
   * test
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket.
   * 
   * @example
   * 51****
   */
  committerId?: number;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2022-04-08 11:15:46
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2022-04-08 11:27:45
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * @example
   * 51****
   */
  orderId?: number;
  /**
   * @remarks
   * The type of the ticket.
   * 
   * @example
   * DC_COMMON
   */
  pluginType?: string;
  /**
   * @remarks
   * The status code of the ticket. Valid values:
   * 
   * *   **fail**: The ticket fails to be executed.
   * *   **toaudit**: The ticket is waiting for approval.
   * *   **cancel**: The ticket is cancelled.
   * *   **processing**: The ticket is being executed.
   * *   **approved**: The ticket is approved.
   * *   **reject**: The ticket is rejected.
   * *   **success**: The ticket is executed.
   * *   **closed**: The ticket is closed.
   * 
   * @example
   * success
   */
  statusCode?: string;
  /**
   * @remarks
   * The status description of the ticket.
   * 
   * @example
   * changed successfully
   */
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      orderId: 'OrderId',
      pluginType: 'PluginType',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      createTime: 'string',
      lastModifyTime: 'string',
      orderId: 'number',
      pluginType: 'string',
      statusCode: 'string',
      statusDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

