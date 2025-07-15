// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveMessageGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the group is deleted. If the group existed and is deleted, the group ID is unavailable. We recommend that you create a new group.
   * 
   * @example
   * true
   */
  alreadyDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the group already exists.
   * 
   * @example
   * true
   */
  alreadyExists?: boolean;
  /**
   * @remarks
   * The ID of the group created.
   * 
   * @example
   * grouptest
   */
  groupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8C7B033-B339-1A58-B0E0-7B9197BA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyDelete: 'AlreadyDelete',
      alreadyExists: 'AlreadyExists',
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyDelete: 'boolean',
      alreadyExists: 'boolean',
      groupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

