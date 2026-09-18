// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotCallDialogRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the call. You can call the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) operation and obtain the value from the **Data** field in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 12516551****^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * The creation time. Format: YYYY-MM-DD hh:mm:ss. The time must be specified precisely. You can call the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) operation and obtain the value from the **date** parameter in the **Response Header**.
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

