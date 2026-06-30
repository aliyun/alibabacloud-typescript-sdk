// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 1244721
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Complete JSON string information. See the details below.
   * 
   * This parameter is required.
   * 
   * @example
   * {"tid":"20200823-234234","dialogue":"{}"}
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

