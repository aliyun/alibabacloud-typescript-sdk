// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content.
   * 
   * @example
   * {"MySQL": "MySQL optimization guide...","PostgreSQL": "PostgreSQL optimization guide..."}
   */
  contentShrink?: string;
  /**
   * @remarks
   * The list of database types.
   */
  dbtypesShrink?: string;
  /**
   * @remarks
   * The description of the Skill. The description can be up to 1000 characters in length.
   * 
   * @example
   * SQL Review Expert: Comprehensively reviews SQL for security, performance, and compliance, identifies risks, and provides optimization suggestions. Activated immediately when a user submits SQL or asks "SQL review", "SQL Review", "any risks?", or "how to optimize"
   */
  description?: string;
  /**
   * @remarks
   * The name of the Skill. The name can contain only lowercase letters, digits, and hyphens.
   * 
   * @example
   * sql-optimization
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 8f6a2111-3828-4a9f-a3ce-51ce73c6****
   */
  skillId?: string;
  /**
   * @remarks
   * The version update note for the ContextDB Skill. Specify this parameter when confirming storage after the check passes. The note can be up to 1000 characters in length.
   * 
   * @example
   * Update Skill documentation
   */
  updateNote?: string;
  /**
   * @remarks
   * The upload session ID returned by GetUploadPolicy for ContextDB full package updates. This parameter is not required for original RDS field updates.
   * 
   * @example
   * upload-example
   */
  uploadId?: string;
  /**
   * @remarks
   * The upload session token paired with UploadId, used to verify ownership. This parameter is not required for original RDS field updates.
   * 
   * @example
   * token-example
   */
  uploadToken?: string;
  /**
   * @remarks
   * The ContextDB workspace ID. This parameter is not required for regular Skill calls.
   * 
   * @example
   * ws-example
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      dbtypesShrink: 'Dbtypes',
      description: 'Description',
      name: 'Name',
      skillId: 'SkillId',
      updateNote: 'UpdateNote',
      uploadId: 'UploadId',
      uploadToken: 'UploadToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      dbtypesShrink: 'string',
      description: 'string',
      name: 'string',
      skillId: 'string',
      updateNote: 'string',
      uploadId: 'string',
      uploadToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

