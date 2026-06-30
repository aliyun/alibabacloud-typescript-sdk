// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HandleComplaintRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business space.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A JSON string that contains the request parameters. For details, see the following section.
   * 
   * This parameter is required.
   * 
   * @example
   * {"taskId":"任务ID"}
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

