// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUsersToRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a032a1317254153012687347ef4ee
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

