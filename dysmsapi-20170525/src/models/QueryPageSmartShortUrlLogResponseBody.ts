// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPageSmartShortUrlLogResponseBodyModel } from "./QueryPageSmartShortUrlLogResponseBodyModel";


export class QueryPageSmartShortUrlLogResponseBody extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: QueryPageSmartShortUrlLogResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: QueryPageSmartShortUrlLogResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

