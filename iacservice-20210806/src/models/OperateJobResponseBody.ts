// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateJobResponseBody extends $dara.Model {
  /**
   * @example
   * E602681C-A811-5787-9DC3-48BED7537071
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

