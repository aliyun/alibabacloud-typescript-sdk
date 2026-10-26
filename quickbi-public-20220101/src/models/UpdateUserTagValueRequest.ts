// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserTagValueRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag to be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * The tag value to be modified.
   * 
   * - To clear this tag, set the tag value to ($NULL$).
   * - For multiple values, use English commas to separate them.
   * - Format validation, maximum length: 3000 characters
   * 
   * This parameter is required.
   * 
   * @example
   * Product Director
   */
  tagValue?: string;
  /**
   * @remarks
   * The user ID for which the tag value is to be modified. This user ID refers to the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagValue: 'TagValue',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagValue: 'string',
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

