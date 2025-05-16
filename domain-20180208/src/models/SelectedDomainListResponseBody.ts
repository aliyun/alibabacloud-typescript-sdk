// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SelectedDomainListResponseBodyModule } from "./SelectedDomainListResponseBodyModule";


export class SelectedDomainListResponseBody extends $dara.Model {
  /**
   * @example
   * OssFileNotFound
   */
  errorCode?: string;
  module?: SelectedDomainListResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 80011ABC-F573-4795-B0E8-377BFBBA3422
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      module: SelectedDomainListResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

