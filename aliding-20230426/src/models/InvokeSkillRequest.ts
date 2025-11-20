// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSkillRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a1d033dd-xxxx-49cf-b49b-2068081bb551
   */
  skillId?: string;
  stream?: boolean;
  sourceIdOfAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      skillId: 'SkillId',
      stream: 'Stream',
      sourceIdOfAssistantId: 'sourceIdOfAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      skillId: 'string',
      stream: 'boolean',
      sourceIdOfAssistantId: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

