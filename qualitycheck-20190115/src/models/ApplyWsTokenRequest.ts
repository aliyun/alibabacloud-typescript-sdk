// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyWsTokenRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @example
   * {
   *     "business": "test",
   *     "callType": 1,
   *     "callee": "13111111111",
   *     "caller": "13800000000",
   *     "skillGroupId": 1,
   *     "skillGroupName": "test",
   *     "taskConfigId": 399,
   *     "tid": "2025012412cb129e-1579-46b5-9326-1b2ececf8f30"
   * }
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

