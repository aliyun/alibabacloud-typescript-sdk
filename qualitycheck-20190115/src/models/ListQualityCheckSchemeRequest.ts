// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseMe agent.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the details that follow.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *       "name": "质检方案A"
   * }
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

