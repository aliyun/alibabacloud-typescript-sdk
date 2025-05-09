// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityEvaluationTaskInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring instance.
   * 
   * @example
   * 22130
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ecb967ec-c137-48****
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

