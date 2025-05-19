// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProjectMetaResponseBodyResources } from "./QueryProjectMetaResponseBodyResources";


export class QueryProjectMetaResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @example
   * D3DBF9F5-7C4D-4A67-B869-097C069C481D
   */
  requestId?: string;
  resources?: QueryProjectMetaResponseBodyResources;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      resources: QueryProjectMetaResponseBodyResources,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

