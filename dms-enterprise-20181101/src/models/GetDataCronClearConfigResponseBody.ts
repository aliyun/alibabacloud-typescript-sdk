// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCronClearConfigResponseBodyDataCronClearConfig } from "./GetDataCronClearConfigResponseBodyDataCronClearConfig";


export class GetDataCronClearConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data configuration.
   */
  dataCronClearConfig?: GetDataCronClearConfigResponseBodyDataCronClearConfig;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 283C461F-11D8-48AA-B695-DF092DA32AF3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCronClearConfig: 'DataCronClearConfig',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCronClearConfig: GetDataCronClearConfigResponseBodyDataCronClearConfig,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCronClearConfig && typeof (this.dataCronClearConfig as any).validate === 'function') {
      (this.dataCronClearConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

