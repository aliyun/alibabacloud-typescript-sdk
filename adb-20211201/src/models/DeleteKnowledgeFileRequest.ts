// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKnowledgeFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 2131213
   */
  fileId?: string;
  /**
   * @remarks
   * The path of the knowledge base document.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileId: 'FileId',
      fileLocation: 'FileLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileId: 'string',
      fileLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

