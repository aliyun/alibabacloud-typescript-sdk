// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskAssignRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Complete JSON string information. See the details below for specific content.
   * 
   * This parameter is required.
   * 
   * @example
   * {"pageNumber":1,"pageSize":10}
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

