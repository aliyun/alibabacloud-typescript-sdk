// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSmartShortUrlResponseBodyModel } from "./CreateSmartShortUrlResponseBodyModel";


export class CreateSmartShortUrlResponseBody extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: CreateSmartShortUrlResponseBodyModel[];
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      model: { 'type': 'array', 'itemType': CreateSmartShortUrlResponseBodyModel },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

