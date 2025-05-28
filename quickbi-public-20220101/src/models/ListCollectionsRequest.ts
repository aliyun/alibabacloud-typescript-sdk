// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user. The user ID is the UserID of the Quick BI, not the UID of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

