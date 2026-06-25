// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of configurations deleted.
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * A message indicating the operation result.
   * 
   * @example
   * Successfully deleted 1 configs
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

