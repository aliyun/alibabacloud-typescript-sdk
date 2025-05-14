// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WearOrgHonorResponseBodyContent } from "./WearOrgHonorResponseBodyContent";


export class WearOrgHonorResponseBody extends $dara.Model {
  content?: WearOrgHonorResponseBodyContent;
  /**
   * @example
   * 0
   */
  errorCode?: string;
  errorCtx?: { [key: string]: any };
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32FFC91D-0A9F-585A-B84F-8A54C5187035
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      errorCode: 'errorCode',
      errorCtx: 'errorCtx',
      errorMsg: 'errorMsg',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: WearOrgHonorResponseBodyContent,
      errorCode: 'string',
      errorCtx: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorMsg: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(this.errorCtx) {
      $dara.Model.validateMap(this.errorCtx);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

