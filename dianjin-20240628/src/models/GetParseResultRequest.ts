// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseResultRequest extends $dara.Model {
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 873648346573245
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
   * Specifies whether to return the result as a URL. If true, the parsing result is in resultUrl, and result is empty. If false, the parsing result is in result, and resultUrl is empty.
   * 
   * @example
   * false
   */
  useUrlResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      libraryId: 'libraryId',
      useUrlResult: 'useUrlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      libraryId: 'string',
      useUrlResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

