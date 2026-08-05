// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataSyncForLLMRequest extends $dara.Model {
  /**
   * @remarks
   * The business space ID.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The complete JSON string. For more information, see the following details.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"tickets\\":[{\\"dialogue\\":[{\\"role\\":\\"Agent\\",\\"words\\":\\"Yes\\",\\"end\\":0,\\"beginTime\\":1783909236618,\\"begin\\":0}],\\"tid\\":\\"20260713-20240612032225161783909236618\\"}],\\"commonRuleIds\\":[\\"20773\\"]}
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

