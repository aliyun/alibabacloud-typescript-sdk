// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {"pageNumber":1,"pageSize":10,"sourceDataType":"1"}
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

