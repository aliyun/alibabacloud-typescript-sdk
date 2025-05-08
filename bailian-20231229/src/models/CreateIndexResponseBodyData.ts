// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIndexResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the knowledge base, `IndexId`.
   * 
   * >  We recommend that you store this ID. It is required for all subsequent API operations related to this knowledge base.
   * 
   * @example
   * jkurxhju6b
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

