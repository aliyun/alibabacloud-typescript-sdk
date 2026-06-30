// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveConfigDataSetRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * A complete JSON string. For details, see the following information.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"judgeType":1,"setId":851,"jsonStrForRule":{"conditions":[{"cid":"1","check_range":{},"lambda":"1","operators":[{"oid":1,"type":"HIT_ANY_KEYWORDS","param":{"keywords":["有什么可以帮您","客服中心"],"in_sentence":false}}]}],"rules":[{"externalProperty":0,"lambda":"1","rid":"1"}],"roleJudgeMethod":"keyword"},"channelType":1}"
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

