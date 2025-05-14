// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOuterAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

