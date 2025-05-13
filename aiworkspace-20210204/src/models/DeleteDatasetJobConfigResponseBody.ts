// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA869D1B-035A-43B2-ACC1-C56681BD9FAA
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

