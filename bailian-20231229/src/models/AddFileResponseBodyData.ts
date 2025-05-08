// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The primary key ID of the document. We recommend that you store the ID because it is required for all subsequent API operations related to this document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @remarks
   * The parser that is used to parse the document. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: Intelligent document parsing by Alibaba Cloud.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      parser: 'Parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      parser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

