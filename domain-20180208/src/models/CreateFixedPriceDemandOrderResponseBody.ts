// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFixedPriceDemandOrderResponseBodyModule } from "./CreateFixedPriceDemandOrderResponseBodyModule";


export class CreateFixedPriceDemandOrderResponseBody extends $dara.Model {
  errorCode?: string;
  httpStatusCode?: number;
  module?: CreateFixedPriceDemandOrderResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      module: 'Module',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      httpStatusCode: 'number',
      module: CreateFixedPriceDemandOrderResponseBodyModule,
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

