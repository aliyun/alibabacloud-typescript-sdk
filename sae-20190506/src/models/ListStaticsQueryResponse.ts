// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StaticsInfo } from "./StaticsInfo";


export class ListStaticsQueryResponse extends $dara.Model {
  length?: number;
  sort?: string;
  statics?: StaticsInfo[];
  static names(): { [key: string]: string } {
    return {
      length: 'length',
      sort: 'sort',
      statics: 'statics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      length: 'number',
      sort: 'string',
      statics: { 'type': 'array', 'itemType': StaticsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.statics)) {
      $dara.Model.validateArray(this.statics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

