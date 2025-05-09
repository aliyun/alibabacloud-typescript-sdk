// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceResponseBodyResource } from "./GetResourceResponseBodyResource";


export class GetResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E871F6C0-2EFF-5790-A00D-C57543EEXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the file resource.
   */
  resource?: GetResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: GetResourceResponseBodyResource,
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

