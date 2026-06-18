// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotCallDialogRequest extends $dara.Model {
  /**
   * @remarks
   * Unique call ID. You can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API and check the **Data** field in the response to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * 12516551****^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * Creation Time. Format: YYYY-MM-DD hh:mm:ss. The time must be precise. You can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API and view the **date** parameter in the **Response Header** of the response to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-20 00:00:00
   */
  createTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      createTime: 'CreateTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      createTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

