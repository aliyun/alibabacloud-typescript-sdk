// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenDocQaResultRequest extends $dara.Model {
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 182364872346
   */
  docId?: string;
  /**
   * @remarks
   * The document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjdgdsfg
   */
  libraryId?: string;
  /**
   * @remarks
   * The request ID. This ID uniquely identifies the request. The first request with this ID starts the Q\\&A pair parsing. Subsequent requests with the same ID query the parsing status and results.
   * 
   * This parameter is required.
   * 
   * @example
   * 0FC6636E-380A-5369-AE01-D1C15BB9B254
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

