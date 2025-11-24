// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectModelTierResponseBody extends $dara.Model {
  /**
   * @example
   * "data":{
   * 		"data":"success",
   * 		"requestId":"****"
   * 	}
   */
  data?: string;
  /**
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @example
   * this project is not exist.
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 73207140-0FD5-588A-B11A-3CE093924196
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

