// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBusinessCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. For details, see the table below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"适用业务名称"}
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

