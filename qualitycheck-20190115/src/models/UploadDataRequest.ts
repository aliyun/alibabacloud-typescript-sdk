// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID. Use this to select a specific workspace in multi-workspace scenarios. Defaults to the default workspace.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * JsonStr is a JSON string that contains all custom parameters for this API. See the JsonStr property description below.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
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

