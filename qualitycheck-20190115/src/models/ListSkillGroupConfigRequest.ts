// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For details, see the following section.
   * 
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize": 1}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'JsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      jsonStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

