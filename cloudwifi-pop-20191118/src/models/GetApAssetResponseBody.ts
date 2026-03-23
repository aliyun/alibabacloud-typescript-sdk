// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApAssetResponseBody extends $dara.Model {
  data?: { [key: string]: any };
  /**
   * @example
   * 0
   */
  errorCode?: number;
  /**
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

