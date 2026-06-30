// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemeTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Input parameter in JSON format. For details, see Request Parameters.
   * 
   * @example
   * {"manualReview":0,"name":"检测任务 2022-09-21 16:59:50","asrTaskPriority":2,"modeCustomizationId":"englishxxx","vocabId":"xxxx5b98d98f8405xxxxxe5dbb383ca1df","dataConfig":{"assignConfigs":[{"assignConfigContests":[{"name":"fileName","symbol":1,"value":["1"],"dataType":2}]}]},"schemeIdList":[187],"sourceDataType":1}
   */
  jsonStr?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      jsonStr: 'jsonStr',
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

