// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * Quick BI the user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
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

