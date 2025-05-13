// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeComponentIndexResponseBodyResultTemplate } from "./DescribeComponentIndexResponseBodyResultTemplate";


export class DescribeComponentIndexResponseBodyResult extends $dara.Model {
  /**
   * @example
   * { "description": "set number of shards to one" }
   */
  meta?: { [key: string]: any };
  template?: DescribeComponentIndexResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: DescribeComponentIndexResponseBodyResultTemplate,
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

