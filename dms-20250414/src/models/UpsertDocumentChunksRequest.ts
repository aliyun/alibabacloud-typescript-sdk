// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertDocumentChunksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [
   *   {
   *     "Id": "2e12aeb5-52cd-4834-bcd8-****",
   *     "Content": "test1"
   *   },
   *   {
   *     "Id": "2fdnwefi5-dsad-4t35-bcd8-****",
   *     "Content": "test2"
   *   }
   * ]
   */
  chunks?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test.md
   */
  documentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  static names(): { [key: string]: string } {
    return {
      chunks: 'Chunks',
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunks: 'string',
      documentName: 'string',
      kbUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

