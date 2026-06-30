// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataSyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business space ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON string that contains the custom parameters for the operation. See the **jsonStr attributes** section for details.
   * 
   * This parameter is required.
   * 
   * @example
   * {"tickets":xxx}
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

