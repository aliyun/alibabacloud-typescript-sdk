// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataV4Request extends $dara.Model {
  /**
   * @remarks
   * The business space ID. Used to specify a business space in multi-business space scenarios. Default value: the default business space.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * JsonStr is a JSON string that contains all custom parameters for this operation. For details, see the jsonStr property description below.
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

