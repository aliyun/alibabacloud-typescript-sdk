// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStreamTagToSearchLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaId: 'MediaId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

