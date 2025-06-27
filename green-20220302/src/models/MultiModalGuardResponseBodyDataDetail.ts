// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultiModalGuardResponseBodyDataDetailResult } from "./MultiModalGuardResponseBodyDataDetailResult";


export class MultiModalGuardResponseBodyDataDetail extends $dara.Model {
  /**
   * @example
   * none
   */
  level?: string;
  result?: MultiModalGuardResponseBodyDataDetailResult[];
  /**
   * @example
   * pass
   */
  suggestion?: string;
  /**
   * @example
   * contentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      result: 'Result',
      suggestion: 'Suggestion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      result: { 'type': 'array', 'itemType': MultiModalGuardResponseBodyDataDetailResult },
      suggestion: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

