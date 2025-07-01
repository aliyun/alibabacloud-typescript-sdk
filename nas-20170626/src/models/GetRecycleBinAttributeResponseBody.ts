// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRecycleBinAttributeResponseBodyRecycleBinAttribute } from "./GetRecycleBinAttributeResponseBodyRecycleBinAttribute";


export class GetRecycleBinAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the recycle bin.
   */
  recycleBinAttribute?: GetRecycleBinAttributeResponseBodyRecycleBinAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recycleBinAttribute: 'RecycleBinAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recycleBinAttribute: GetRecycleBinAttributeResponseBodyRecycleBinAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recycleBinAttribute && typeof (this.recycleBinAttribute as any).validate === 'function') {
      (this.recycleBinAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

