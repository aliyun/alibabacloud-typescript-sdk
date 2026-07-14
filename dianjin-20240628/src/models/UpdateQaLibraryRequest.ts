// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQaLibraryRequestParseQaResults extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * This parameter is required.
   * 
   * @example
   * 这款**糯米大烧麦的净含量是900g。
   */
  answer?: string;
  /**
   * @remarks
   * The question.
   * 
   * This parameter is required.
   * 
   * @example
   * 这款**糯米大烧麦的净含量是多少？
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQaLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * A list of parsed Q\\&A pair results.
   * 
   * This parameter is required.
   */
  parseQaResults?: UpdateQaLibraryRequestParseQaResults[];
  /**
   * @remarks
   * The ID of the Q\\&A library.
   * 
   * @example
   * 6jh378d
   */
  qaLibraryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

