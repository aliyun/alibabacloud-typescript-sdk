// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * default
   */
  categoryId?: string;
  docName?: string;
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * http://xxx/xxx.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  statusMessage?: string;
  videoContents?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      fileUrl: 'FileUrl',
      status: 'Status',
      statusMessage: 'StatusMessage',
      videoContents: 'VideoContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      fileUrl: 'string',
      status: 'number',
      statusMessage: 'string',
      videoContents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.videoContents)) {
      $dara.Model.validateArray(this.videoContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

