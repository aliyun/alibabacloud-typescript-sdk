// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHzXiHu
   */
  isolationId?: string;
  /**
   * @remarks
   * The unique internal user ID of the face service.
   * 
   * This parameter is required.
   * 
   * @example
   * 3mtjaqebeq4dulcy
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
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

