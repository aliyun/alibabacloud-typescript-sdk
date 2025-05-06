// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchLawQueryResponseBodyDataLawResultLawDomain } from "./RunSearchLawQueryResponseBodyDataLawResultLawDomain";


export class RunSearchLawQueryResponseBodyDataLawResult extends $dara.Model {
  lawDomain?: RunSearchLawQueryResponseBodyDataLawResultLawDomain;
  /**
   * @example
   * 0.0050
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      lawDomain: 'lawDomain',
      similarity: 'similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lawDomain: RunSearchLawQueryResponseBodyDataLawResultLawDomain,
      similarity: 'string',
    };
  }

  validate() {
    if(this.lawDomain && typeof (this.lawDomain as any).validate === 'function') {
      (this.lawDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

