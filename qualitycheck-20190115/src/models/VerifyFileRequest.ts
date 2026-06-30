// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyFileRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Complete JSON string information. For details, see the following information.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"taskId":"EA701F66-8CA2-4A79-8E3C-A6F2****","fileName":"人工校验测试-订购茶叶.wav"}"
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

