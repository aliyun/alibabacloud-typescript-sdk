// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomerCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramList?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      paramList: 'ParamList',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramList: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

