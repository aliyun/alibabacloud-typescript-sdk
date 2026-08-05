// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperienceDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 65C620DA-D6BE-5F56-BBCD-6F2282BB7BAD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

