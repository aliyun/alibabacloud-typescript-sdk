// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeTagsRequest extends $dara.Model {
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
   * 21321
   */
  fileId?: string;
  /**
   * @remarks
   * The location of the knowledge base document.
   * 
   * @example
   * oss://bucketName/path/to/file.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The JSON string of the tag array. Each tag must be in the following format: {"tag_key":"key_name","tag_value":"value"}.
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

