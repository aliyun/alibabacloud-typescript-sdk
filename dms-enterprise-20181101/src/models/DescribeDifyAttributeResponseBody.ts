// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDifyAttributeResponseBodyRoot } from "./DescribeDifyAttributeResponseBodyRoot";


export class DescribeDifyAttributeResponseBody extends $dara.Model {
  code?: string;
  errorCode?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  root?: DescribeDifyAttributeResponseBodyRoot;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      root: DescribeDifyAttributeResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

