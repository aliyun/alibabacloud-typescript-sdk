// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMetricMetaResponseBodyResources } from "./QueryMetricMetaResponseBodyResources";


export class QueryMetricMetaResponseBody extends $dara.Model {
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
   * 0CCE0AF0-053C-4B13-A583-DC9A85785D49
   */
  requestId?: string;
  resources?: QueryMetricMetaResponseBodyResources;
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
      resources: QueryMetricMetaResponseBodyResources,
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

