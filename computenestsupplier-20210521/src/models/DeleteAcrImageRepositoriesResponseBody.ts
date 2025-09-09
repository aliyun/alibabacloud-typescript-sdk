// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAcrImageRepositoriesResponseBody extends $dara.Model {
  /**
   * @example
   * 9B55A3FD-B562-5BFE-A91A-DB1790717236
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

