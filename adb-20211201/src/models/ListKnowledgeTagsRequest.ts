// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ADB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 2112314
   */
  fileId?: string;
  /**
   * @remarks
   * The location of the knowledge base document.
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

