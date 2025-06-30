// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanOssObjectV1ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the identification task that is returned after the identification task is created.
   * 
   * @example
   * 268
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C3AC882-E5A8-4855-BE77-B6837B695EF1
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

