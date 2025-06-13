// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAScriptsResponseBodyAScriptIds } from "./CreateAscriptsResponseBodyAscriptIds";


export class CreateAScriptsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AScript rule IDs.
   */
  AScriptIds?: CreateAScriptsResponseBodyAScriptIds[];
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 5c607642-535e-4e06-9d77-df53049b****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF0FE763-9603-558F-A55B-0F4B9A3E3C02
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': CreateAScriptsResponseBodyAScriptIds },
      jobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AScriptIds)) {
      $dara.Model.validateArray(this.AScriptIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

