// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The index migration task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * et_cn_0oyg09o96ib40****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

