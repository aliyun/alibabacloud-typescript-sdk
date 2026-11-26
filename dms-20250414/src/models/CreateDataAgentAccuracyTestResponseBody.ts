// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentAccuracyTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The accuracy test instance ID.
   * 
   * @example
   * at-xxxxxxxxxxxxxxxxxxxx
   */
  accuracyTestInsId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestInsId: 'AccuracyTestInsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestInsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentAccuracyTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: CreateDataAgentAccuracyTestResponseBodyData;
  /**
   * @remarks
   * The error code returned when an exception occurs.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A61C2009-xxx-BE7E95CEDF2F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.                                 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDataAgentAccuracyTestResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

