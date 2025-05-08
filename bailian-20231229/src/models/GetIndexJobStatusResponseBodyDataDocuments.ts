// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexJobStatusResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * Index.Document.ChunkError
   */
  code?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  docId?: string;
  /**
   * @remarks
   * The name of the document.
   */
  docName?: string;
  gmtModified?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * document parse error
   */
  message?: string;
  /**
   * @remarks
   * The import status of the document. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      docId: 'DocId',
      docName: 'DocName',
      gmtModified: 'GmtModified',
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      docId: 'string',
      docName: 'string',
      gmtModified: 'number',
      message: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

