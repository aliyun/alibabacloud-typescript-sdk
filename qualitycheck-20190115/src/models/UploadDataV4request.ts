// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataV4Request extends $dara.Model {
  /**
   * @remarks
   * The workspace ID. Use this parameter to select a specific workspace when you have multiple workspaces. If you do not specify this parameter, the default workspace is used.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The JSON string that contains all the custom parameters for this API. For more information, see the description of jsonStr properties below.
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

