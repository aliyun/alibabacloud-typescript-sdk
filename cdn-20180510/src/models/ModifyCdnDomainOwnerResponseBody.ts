// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdnDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the domain name transfer.
   * 
   * @example
   * The domain does not allow to transfer to a different account.
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C98E518B-024E-538E-8276-66310CB8667D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

