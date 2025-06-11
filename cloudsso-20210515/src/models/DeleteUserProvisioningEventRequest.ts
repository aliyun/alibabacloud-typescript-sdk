// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserProvisioningEventRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning event.
   * 
   * You can call the [ListUserProvisioningEvents](https://help.aliyun.com/document_detail/2636305.html) operation to query the value of `EventId`.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the RAM user provisioning.
   * 
   * @example
   * up-002axzhapcbz6e63****
   */
  userProvisioningId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      eventId: 'EventId',
      userProvisioningId: 'UserProvisioningId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      eventId: 'string',
      userProvisioningId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

