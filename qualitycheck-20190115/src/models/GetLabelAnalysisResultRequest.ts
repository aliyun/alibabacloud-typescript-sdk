// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLabelAnalysisResultRequest extends $dara.Model {
  /**
   * @remarks
   * The business space ID.
   * 
   * @example
   * 12345
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the following detailed description.
   * 
   * @example
   * “”
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

