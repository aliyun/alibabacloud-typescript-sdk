// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAccountAuthorityResponseBodyData } from "./ModifyAccountAuthorityResponseBodyData";


export class ModifyAccountAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: ModifyAccountAuthorityResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyAccountAuthorityResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

