// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScoreInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Paged queries are not supported. Pass an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * ""
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

