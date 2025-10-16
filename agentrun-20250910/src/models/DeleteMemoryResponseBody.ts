// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemoryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 970F08C9-EB28-5A3D-A228-D541AEC4C807
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

