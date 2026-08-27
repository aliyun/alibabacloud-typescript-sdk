// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSkillMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The skill description.
   * - By default, this parameter is optional. The backend parses the ZIP package specified by UploadLocation to obtain the skill description.
   * 
   * @example
   * This is a demo skill description.
   */
  description?: string;
  /**
   * @remarks
   * The skill name.
   * - By default, this parameter is optional. The backend parses the ZIP package specified by UploadLocation to obtain the skill name.
   * 
   * @example
   * data-query-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The full path for uploading the skill ZIP file.
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
      skillName: 'SkillName',
      uploadLocation: 'UploadLocation',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

