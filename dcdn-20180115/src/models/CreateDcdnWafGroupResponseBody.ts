// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDcdnWafGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created WAF rule group.
   * 
   * @example
   * 30000166
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 675F4820-400E-5929-8B03-2C031A5D5391
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

