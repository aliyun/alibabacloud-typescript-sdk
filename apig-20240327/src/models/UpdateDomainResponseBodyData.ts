// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The released version ID.
   * 
   * @example
   * apr-xxx
   */
  deployRevisionId?: string;
  static names(): { [key: string]: string } {
    return {
      deployRevisionId: 'deployRevisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployRevisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

