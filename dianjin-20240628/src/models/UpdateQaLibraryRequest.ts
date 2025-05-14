// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateQaLibraryRequestParseQaResults } from "./UpdateQaLibraryRequestParseQaResults";


export class UpdateQaLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  parseQaResults?: UpdateQaLibraryRequestParseQaResults[];
  /**
   * @example
   * 6jh378d
   */
  qaLibraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parseQaResults: 'parseQaResults',
      qaLibraryId: 'qaLibraryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parseQaResults: { 'type': 'array', 'itemType': UpdateQaLibraryRequestParseQaResults },
      qaLibraryId: 'string',
      requestId: 'string',
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

