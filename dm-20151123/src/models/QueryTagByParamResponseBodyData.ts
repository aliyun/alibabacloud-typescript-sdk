// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTagByParamResponseBodyDataTag } from "./QueryTagByParamResponseBodyDataTag";


export class QueryTagByParamResponseBodyData extends $dara.Model {
  tag?: QueryTagByParamResponseBodyDataTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': QueryTagByParamResponseBodyDataTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

