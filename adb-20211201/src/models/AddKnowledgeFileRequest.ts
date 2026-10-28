// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeFileRequest extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB for MySQL cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp19aaaaaa****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The file location. Only OSS paths are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket_name/file/path
   */
  fileLocation?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Specifies whether the path is a folder.
   * 
   * @example
   * false
   */
  isDir?: boolean;
  /**
   * @remarks
   * The credibility or weight of the file.
   * 
   * @example
   * high
   */
  priority?: string;
  /**
   * @remarks
   * The file tags in JSON format.
   * 
   * @example
   * {"type":"game"}
   */
  tags?: string;
  /**
   * @remarks
   * The user who uploads the knowledge base file.
   * 
   * @example
   * user1
   */
  uploadUser?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileLocation: 'FileLocation',
      fileType: 'FileType',
      isDir: 'IsDir',
      priority: 'Priority',
      tags: 'Tags',
      uploadUser: 'UploadUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileLocation: 'string',
      fileType: 'string',
      isDir: 'boolean',
      priority: 'string',
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

