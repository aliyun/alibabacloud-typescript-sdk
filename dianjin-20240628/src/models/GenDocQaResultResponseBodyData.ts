// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenDocQaResultResponseBodyDataParseQaResults } from "./GenDocQaResultResponseBodyDataParseQaResults";


export class GenDocQaResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * PROCESSING
   */
  currentStatus?: string;
  /**
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @example
   * 7wxwrjpabj
   */
  libraryId?: string;
  parseQaResults?: GenDocQaResultResponseBodyDataParseQaResults[];
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'currentStatus',
      docId: 'docId',
      libraryId: 'libraryId',
      parseQaResults: 'parseQaResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      docId: 'string',
      libraryId: 'string',
      parseQaResults: { 'type': 'array', 'itemType': GenDocQaResultResponseBodyDataParseQaResults },
    };
  }

  validate() {
    if(Array.isArray(this.parseQaResults)) {
      $dara.Model.validateArray(this.parseQaResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

