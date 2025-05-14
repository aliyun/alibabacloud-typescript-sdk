// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F32XXX2CF9
   */
  applicationCode?: string;
  bizParam?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @example
   * 057188040000
   */
  callerNumber?: string;
  extension?: string;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  promptParam?: { [key: string]: any };
  startWordParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      bizParam: 'BizParam',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      extension: 'Extension',
      outId: 'OutId',
      promptParam: 'PromptParam',
      startWordParam: 'StartWordParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      bizParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      calledNumber: 'string',
      callerNumber: 'string',
      extension: 'string',
      outId: 'string',
      promptParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.bizParam) {
      $dara.Model.validateMap(this.bizParam);
    }
    if(this.promptParam) {
      $dara.Model.validateMap(this.promptParam);
    }
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

