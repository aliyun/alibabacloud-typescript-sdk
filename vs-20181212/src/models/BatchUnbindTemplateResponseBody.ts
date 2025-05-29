// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchUnbindTemplateResponseBodyBindings } from "./BatchUnbindTemplateResponseBodyBindings";


export class BatchUnbindTemplateResponseBody extends $dara.Model {
  bindings?: BatchUnbindTemplateResponseBodyBindings[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': BatchUnbindTemplateResponseBodyBindings },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

