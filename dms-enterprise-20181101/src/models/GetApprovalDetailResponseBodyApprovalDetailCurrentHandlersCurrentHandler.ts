// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApprovalDetailResponseBodyApprovalDetailCurrentHandlersCurrentHandler extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * nickName
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

