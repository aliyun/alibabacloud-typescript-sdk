// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclCheckDetailStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The modified status.
   * 
   * This parameter is required.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The ACL check task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier ID of the ACL policy in the ACL check details.
   * 
   * This parameter is required.
   * 
   * @example
   * bbbb43c9-a931-4d89-9939-86d509139a20
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      status: 'Status',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      status: 'string',
      taskId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

