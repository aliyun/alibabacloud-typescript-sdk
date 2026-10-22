// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the update is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

