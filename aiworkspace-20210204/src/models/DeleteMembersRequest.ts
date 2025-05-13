// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of member IDs. Separate multiple member IDs with commas (,). You can call [ListMembers](https://help.aliyun.com/document_detail/449135.html) to obtain the member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 145883-21513926******88039,145883-2769726******87513
   */
  memberIds?: string;
  static names(): { [key: string]: string } {
    return {
      memberIds: 'MemberIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

