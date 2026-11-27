// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveKnowledgeTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database cluster.
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
   * 2131234
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
  /**
   * @remarks
   * The JSON string of the array of tags to delete.
   * 
   * @example
   * [{"tag_key":"biz.scene","tag_value":"test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileId: 'FileId',
      fileLocation: 'FileLocation',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileId: 'string',
      fileLocation: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

