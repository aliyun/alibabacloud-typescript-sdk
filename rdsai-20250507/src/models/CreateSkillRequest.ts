// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The content.
   * 
   * @example
   * {"MySQL": "MySQL optimization guide...","PostgreSQL": "PostgreSQL optimization guide..."}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The list of database types.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * The skill description. The description can be up to 1000 characters in length.
   * 
   * @example
   * SQL query optimization skill
   */
  description?: string;
  /**
   * @remarks
   * The skill name. The name can contain only lowercase letters, digits, and hyphens.
   * 
   * @example
   * query-optimization
   */
  name?: string;
  /**
   * @remarks
   * The ContextDB skill version update note. Provide this value when confirming storage after validation passes. The note can be up to 1000 characters in length.
   * 
   * @example
   * Initial release
   */
  updateNote?: string;
  /**
   * @remarks
   * The skill upload session ID.
   * 
   * @example
   * upload-example
   */
  uploadId?: string;
  /**
   * @remarks
   * The skill upload session token.
   * 
   * @example
   * token-example
   */
  uploadToken?: string;
  /**
   * @remarks
   * The ContextDB workspace ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      dbtypes: 'Dbtypes',
      description: 'Description',
      name: 'Name',
      updateNote: 'UpdateNote',
      uploadId: 'UploadId',
      uploadToken: 'UploadToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
      updateNote: 'string',
      uploadId: 'string',
      uploadToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.dbtypes)) {
      $dara.Model.validateArray(this.dbtypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

