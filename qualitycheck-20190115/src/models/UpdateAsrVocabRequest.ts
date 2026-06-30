// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The request parameters that are configured as a JSON string. For more information, see the details below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"vocabId":"指定热词Id"}
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

