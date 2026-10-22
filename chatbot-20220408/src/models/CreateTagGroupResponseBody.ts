// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag group.
   * 
   * @example
   * 7393472
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

