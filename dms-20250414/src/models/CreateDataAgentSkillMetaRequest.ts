// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSkillMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The skill description. This parameter is optional. If not specified, the backend parses the ZIP package specified by UploadLocation to obtain the skill description.
   * 
   * @example
   * This is a demo skill description.
   */
  description?: string;
  /**
   * @remarks
   * The skill ID. If you specify this parameter, the uploaded skill overwrites the existing skill and replaces the original skill content. Note: The name of the original skill and the newly uploaded skill must be identical.
   * 
   * @example
   * ski-04pomiln*************j0
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name. This parameter is optional. If not specified, the backend parses the ZIP package specified by UploadLocation to obtain the skill name.
   * 
   * @example
   * data-query-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The full path for the skill ZIP file upload.
   * - Format: The UploadDir field returned by the DescribeSkillFileUploadSignature operation concatenated with the file name.
   * - Example: ${UploadDir}/${Filename}
   */
  uploadLocation?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * tmbbtfv8***********zuqko6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      skillId: 'SkillId',
      skillName: 'SkillName',
      uploadLocation: 'UploadLocation',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      skillId: 'string',
      skillName: 'string',
      uploadLocation: 'string',
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

