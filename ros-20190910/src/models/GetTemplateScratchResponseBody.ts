// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateScratchResponseBodyTemplateScratch } from "./GetTemplateScratchResponseBodyTemplateScratch";


export class GetTemplateScratchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8E0EF98-6FBD-5656-8298-FC8194F0F7B7
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scenario.
   */
  templateScratch?: GetTemplateScratchResponseBodyTemplateScratch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratch: 'TemplateScratch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratch: GetTemplateScratchResponseBodyTemplateScratch,
    };
  }

  validate() {
    if(this.templateScratch && typeof (this.templateScratch as any).validate === 'function') {
      (this.templateScratch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

