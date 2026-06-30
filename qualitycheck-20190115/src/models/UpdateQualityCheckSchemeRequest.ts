// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityCheckSchemeRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The request parameters in JSON format. For more information, see the supplementary description of request parameters.
   * 
   * @example
   * 无
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
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

