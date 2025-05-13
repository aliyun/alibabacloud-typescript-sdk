// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentIndicesResponseBodyResultContent } from "./ListComponentIndicesResponseBodyResultContent";


export class ListComponentIndicesResponseBodyResult extends $dara.Model {
  composed?: string[];
  content?: ListComponentIndicesResponseBodyResultContent;
  /**
   * @example
   * synthetics-settings
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      composed: 'composed',
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      composed: { 'type': 'array', 'itemType': 'string' },
      content: ListComponentIndicesResponseBodyResultContent,
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.composed)) {
      $dara.Model.validateArray(this.composed);
    }
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

