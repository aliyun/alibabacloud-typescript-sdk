// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the new monitor.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2d9ce-38ef-4923-baf6-391a7e656
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

