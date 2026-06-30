// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSyncQualityCheckDataRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * jsonStr is a JSON string that contains all Custom Parameters for this API. For details, see **jsonStr property description** below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"tid":"xxx"}
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

