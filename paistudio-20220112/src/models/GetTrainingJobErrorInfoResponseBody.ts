// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainingJobErrorInfoResponseBodyErrorInfo extends $dara.Model {
  /**
   * @example
   * additional info
   */
  additionalInfo?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: 'string',
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobErrorInfoResponseBody extends $dara.Model {
  errorInfo?: GetTrainingJobErrorInfoResponseBodyErrorInfo;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfo: 'ErrorInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfo: GetTrainingJobErrorInfoResponseBodyErrorInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.errorInfo && typeof (this.errorInfo as any).validate === 'function') {
      (this.errorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

