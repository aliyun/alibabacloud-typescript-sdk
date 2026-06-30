// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For details, see the following sections.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"jobName":"任务 2020-03-19 14:16:55","jobType":0,"jsonStr":{"dataSetIds":[123**],"modeCustomizationId":"046db35352904c5dbb0564****","ruleIds":[185**,185**],"vocabId":"0f0cd63546c747bcb306bb05***"}}"
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

