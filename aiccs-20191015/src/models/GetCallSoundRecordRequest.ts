// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallSoundRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Unique call ID.
   * 
   * 
   * You can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API and check the **Data** field in the response parameters to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 125165515022^11195613****
   */
  callId?: string;
  /**
   * @remarks
   * Call creation time. Format: YYYY-MM-DD hh:mm:ss.
   * 
   * 
   * You can invoke the [RobotCall](https://help.aliyun.com/document_detail/2717996.html) API and check the **date** parameter in the **Response Header** to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-10-15 08:56:23
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

