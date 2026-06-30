// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifySentenceRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Full JSON string. For details, see the following table.
   * 
   * This parameter is required.
   * 
   * @example
   * "{"taskId":"EA701F66-8CA2-4A79-8E3C-A6F2F****","fileName":"人工校验测试-订购茶叶.wav","dialogueId":1,"roleCorrect":false,"sourceRole":0,"textCorrect":false,"sourceText":"我要订购大量的信阳毛尖。","oldIncorrectWords":3,"targetText":"我要订购大大的南阳毛巾。","targetRole":1}"
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

