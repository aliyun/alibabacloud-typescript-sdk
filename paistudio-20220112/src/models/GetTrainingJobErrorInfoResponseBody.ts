// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTrainingJobErrorInfoResponseBodyErrorInfo } from "./GetTrainingJobErrorInfoResponseBodyErrorInfo";


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

