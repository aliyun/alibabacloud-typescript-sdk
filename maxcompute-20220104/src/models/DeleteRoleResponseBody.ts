// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRoleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  data?: string;
  /**
   * @example
   * 0adb901117579891946416405d0409
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

