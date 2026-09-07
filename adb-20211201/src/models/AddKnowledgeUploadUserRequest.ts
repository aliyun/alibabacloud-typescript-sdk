// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeUploadUserRequest extends $dara.Model {
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
   * The location of the knowledge base document.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucketName/path/to/file.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The JSON string of the authorized user array.
   * 
   * This parameter is required.
   * 
   * @example
   * ["alice","bob"]
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      fileLocation: 'FileLocation',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      fileLocation: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

