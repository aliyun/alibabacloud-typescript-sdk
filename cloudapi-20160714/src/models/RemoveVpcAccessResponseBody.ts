// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveVpcAccessResponseBodyApis } from "./RemoveVpcAccessResponseBodyApis";


export class RemoveVpcAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * API operations
   */
  apis?: RemoveVpcAccessResponseBodyApis;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: RemoveVpcAccessResponseBodyApis,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apis && typeof (this.apis as any).validate === 'function') {
      (this.apis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

