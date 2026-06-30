// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitComplaintRequest extends $dara.Model {
  /**
   * @remarks
   * The business space ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON string that contains the complaint details. For more information, see the following table.
   * 
   * This parameter is required.
   * 
   * @example
   * {"taskId":"ADCA1DE6-8117-472A-B3A1-352A248F90D0","fileId":"653e563d-774f-4f01-a809-cb8bb920c3e6","rid":1346,"comments":"请重新判定"}
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

