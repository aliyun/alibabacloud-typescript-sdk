// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAudioDataRequest extends $dara.Model {
  /**
   * @remarks
   * The business space ID. In multi-business space scenarios, this parameter specifies the business space to use. Default value: the default business space.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For details about the content, see the following detailed information.
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

