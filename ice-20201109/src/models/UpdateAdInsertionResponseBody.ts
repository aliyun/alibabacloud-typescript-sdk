// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAdInsertionResponseBodyConfig } from "./UpdateAdInsertionResponseBodyConfig";


export class UpdateAdInsertionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ad insertion configuration.
   */
  config?: UpdateAdInsertionResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateAdInsertionResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

