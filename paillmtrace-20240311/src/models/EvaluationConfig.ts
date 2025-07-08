// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluationConfigAnswer } from "./EvaluationConfigAnswer";
import { EvaluationConfigContext } from "./EvaluationConfigContext";
import { EvaluationConfigQuery } from "./EvaluationConfigQuery";


export class EvaluationConfig extends $dara.Model {
  answer?: EvaluationConfigAnswer;
  context?: EvaluationConfigContext;
  query?: EvaluationConfigQuery;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      context: 'Context',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: EvaluationConfigAnswer,
      context: EvaluationConfigContext,
      query: EvaluationConfigQuery,
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

