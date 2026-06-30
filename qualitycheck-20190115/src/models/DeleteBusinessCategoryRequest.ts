// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBusinessCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the details below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"bid ":"适用业务ID"}
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

