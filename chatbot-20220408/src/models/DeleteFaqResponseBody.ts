// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaqResponseBody extends $dara.Model {
  /**
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
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

