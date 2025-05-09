// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyApplication } from "./GetApplicationResponseBodyApplication";


export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 51004B8A-6D9A-5ACB-9158-6C6794496AD0
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
      application: GetApplicationResponseBodyApplication,
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

