// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the document belongs.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the document was uploaded to Model Studio. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC + 8.
   * 
   * @example
   * 2024-05-26 12:45:43
   */
  createTime?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file type of the document. The value is an extension. Valid values: pdf, docx, doc, txt, md, pptx, and ppt.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The parser that is used to parse the document. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: The default document parser.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The size of the document. Unit: bytes.
   * 
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * The status of the document. Valid values:
   * 
   * *   INIT: pending parsing.
   * *   PARSING
   * *   PARSE_SUCCESS
   * *   PARSE_FAILED
   * 
   * @example
   * PARSE_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The tags that are associated with the document. A document can be associated with multiple tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      parser: 'Parser',
      sizeInBytes: 'SizeInBytes',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      parser: 'string',
      sizeInBytes: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

