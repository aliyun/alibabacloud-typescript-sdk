// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveAccessControlListEntryResponseBody extends $dara.Model {
  /**
   * @example
   * D1B18FFE-4A81-59D8-AA02-1817098977CD
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

