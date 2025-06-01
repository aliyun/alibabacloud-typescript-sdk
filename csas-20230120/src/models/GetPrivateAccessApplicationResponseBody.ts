// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPrivateAccessApplicationResponseBodyApplication } from "./GetPrivateAccessApplicationResponseBodyApplication";


export class GetPrivateAccessApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The office application.
   */
  application?: GetPrivateAccessApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3ACC5EDC-2B7D-5032-8C58-D7615D66C1D4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetPrivateAccessApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  validate() {
    if(this.application && typeof (this.application as any).validate === 'function') {
      (this.application as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

