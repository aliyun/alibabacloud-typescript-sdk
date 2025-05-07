// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  answerType?: number;
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

