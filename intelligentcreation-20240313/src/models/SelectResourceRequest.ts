// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectResourceRequest extends $dara.Model {
  /**
   * @example
   * 1111
   */
  idempotentId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

