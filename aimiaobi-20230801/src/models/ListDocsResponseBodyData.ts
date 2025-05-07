// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocsResponseBodyData extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: number;
  /**
   * @example
   * 12345
   */
  docId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      docId: 'DocId',
      docName: 'DocName',
      docType: 'DocType',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'number',
      docId: 'string',
      docName: 'string',
      docType: 'string',
      status: 'number',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

