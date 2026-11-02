// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserProvisioningEventRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user synchronization event.
   * 
   * You can invoke [ListUserProvisioningEvents](https://help.aliyun.com/document_detail/2636305.html) to retrieve the `EventId`.
   * 
   * @example
   * upe-wjKyNDmZvyZOiRcJ****
   */
  eventId?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user synchronization.
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

