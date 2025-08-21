// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConnQuestionResponseBody extends $dara.Model {
  /**
   * @example
   * FC323352-3AD7-59A1-9088-A64470BAFC9D
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

