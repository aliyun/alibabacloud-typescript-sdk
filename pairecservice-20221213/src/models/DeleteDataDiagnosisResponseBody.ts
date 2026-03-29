// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

