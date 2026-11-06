// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentSkillDownloadRequest extends $dara.Model {
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * ski-04pomiln*************j0
   */
  skillId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 2ktbdovwf6********cznfo
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      skillId: 'SkillId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillId: 'string',
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

