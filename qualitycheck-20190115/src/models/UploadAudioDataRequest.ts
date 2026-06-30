// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAudioDataRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace ID. This ID is used to select a specific workspace in a multi-workspace scenario. The default workspace is used if you do not specify this parameter.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the details below.
   * 
   * This parameter is required.
   * 
   * @example
   * {“callList”:“xxxxx”}
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

