// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLineSplitResultResponseBodyResource } from "./GetLineSplitResultResponseBodyResource";


export class GetLineSplitResultResponseBody extends $dara.Model {
  code?: number;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  resource?: GetLineSplitResultResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      resource: GetLineSplitResultResponseBodyResource,
      success: 'boolean',
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

