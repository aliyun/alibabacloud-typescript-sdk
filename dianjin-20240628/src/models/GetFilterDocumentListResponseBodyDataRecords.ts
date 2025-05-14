// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 29368126816
   */
  docId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * sdfgsjdfg
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  title?: string;
  /**
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

