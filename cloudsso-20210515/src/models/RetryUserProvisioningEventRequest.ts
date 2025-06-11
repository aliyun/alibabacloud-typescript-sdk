// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryUserProvisioningEventRequest extends $dara.Model {
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
   * The conflict handling policy. The policy is used when a RAM user has the same username as the CloudSSO user who is synchronized to RAM. Valid values:
   * 
   * *   KeepBoth: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system creates a RAM user whose username is the username of the CloudSSO user plus the suffix `_sso`.
   * *   TakeOver: When a CloudSSO user is synchronized to RAM, if a RAM user who has the same username as the CloudSSO user exists, the system replaces the RAM user with the CloudSSO user.
   * 
   * @example
   * KeepBoth
   */
  duplicationStrategy?: string;
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
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      duplicationStrategy: 'DuplicationStrategy',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      duplicationStrategy: 'string',
      eventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

