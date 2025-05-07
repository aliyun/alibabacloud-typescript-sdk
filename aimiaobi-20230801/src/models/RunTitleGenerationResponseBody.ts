// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunTitleGenerationResponseBodyHeader } from "./RunTitleGenerationResponseBodyHeader";
import { RunTitleGenerationResponseBodyPayload } from "./RunTitleGenerationResponseBodyPayload";


export class RunTitleGenerationResponseBody extends $dara.Model {
  code?: string;
  header?: RunTitleGenerationResponseBodyHeader;
  httpStatusCode?: string;
  message?: string;
  payload?: RunTitleGenerationResponseBodyPayload;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      header: 'Header',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      payload: 'Payload',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      header: RunTitleGenerationResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunTitleGenerationResponseBodyPayload,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

