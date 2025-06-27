// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultiModalGuardResponseBodyDataDetail } from "./MultiModalGuardResponseBodyDataDetail";


export class MultiModalGuardResponseBodyData extends $dara.Model {
  /**
   * @example
   * data1234
   */
  dataId?: string;
  detail?: MultiModalGuardResponseBodyDataDetail[];
  /**
   * @example
   * pass
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      detail: 'Detail',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      detail: { 'type': 'array', 'itemType': MultiModalGuardResponseBodyDataDetail },
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

