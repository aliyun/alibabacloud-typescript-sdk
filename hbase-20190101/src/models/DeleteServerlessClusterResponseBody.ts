// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServerlessClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 46950E74-59C4-4E3E-9B38-A33B*********
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

