// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerKnowledgeFileParseRequest extends $dara.Model {
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
   * The ID of the knowledge base file. You must specify either this parameter or FileLocation.
   * 
   * @example
   * 123
   */
  fileId?: string;
  /**
   * @remarks
   * The path to a single file in the knowledge base. You must specify either this parameter or FileId. You cannot specify a directory. The path must uniquely identify an existing file.
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

