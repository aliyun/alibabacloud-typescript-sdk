// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForkKnowledgeFileRequest extends $dara.Model {
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
   * The ID of the knowledge base file. You must specify either this parameter or FileLocation, but not both. Use a decimal positive integer string without leading zeros. Valid values: 1 to 9223372036854775807.
   * 
   * @example
   * 123
   */
  fileId?: string;
  /**
   * @remarks
   * The address of a single file in the knowledge base. You must specify either this parameter or FileId, but not both. You cannot specify a directory. The address must uniquely locate an active file.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The initial business tags for the new record. Use a JSON string of a JSON object or an array of tag_key/tag_value objects. If omitted, the source tags are not inherited.
   * 
   * @example
   * {"biz.game":"yys"}
   */
  tags?: string;
  /**
   * @remarks
   * The initial authorized user for the new record. You can pass a JSON string of a single user identifier or a user array. If omitted, no initial user authorization is applied, and the source authorization is not inherited.
   * 
   * @example
   * ["alice","bob"]
   */
  uploadUser?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileId: 'FileId',
      fileLocation: 'FileLocation',
      tags: 'Tags',
      uploadUser: 'UploadUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileId: 'string',
      fileLocation: 'string',
      tags: 'string',
      uploadUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

