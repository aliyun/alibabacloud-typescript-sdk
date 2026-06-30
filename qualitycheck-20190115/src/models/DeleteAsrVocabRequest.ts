// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAsrVocabRequest extends $dara.Model {
  /**
   * @remarks
   * BaseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. For details, see the table below.
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

