// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityDef } from "./MetaEntityDef";


export class GetMetaEntityDefResponseBody extends $dara.Model {
  metaEntityDef?: MetaEntityDef;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C636A747-7E4E-594D-94CD-2B4F8A9A9A63
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metaEntityDef: 'MetaEntityDef',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaEntityDef: MetaEntityDef,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.metaEntityDef && typeof (this.metaEntityDef as any).validate === 'function') {
      (this.metaEntityDef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

