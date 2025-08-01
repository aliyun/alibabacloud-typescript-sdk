// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuestionAnswerAnswer extends $dara.Model {
  contexts?: string[];
  text?: string;
  static names(): { [key: string]: string } {
    return {
      contexts: 'Contexts',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contexts: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contexts)) {
      $dara.Model.validateArray(this.contexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuestionAnswerGroundTruth extends $dara.Model {
  contexts?: string[];
  text?: string;
  static names(): { [key: string]: string } {
    return {
      contexts: 'Contexts',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contexts: { 'type': 'array', 'itemType': 'string' },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contexts)) {
      $dara.Model.validateArray(this.contexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuestionAnswer extends $dara.Model {
  answer?: QuestionAnswerAnswer;
  groundTruth?: QuestionAnswerGroundTruth;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      groundTruth: 'GroundTruth',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: QuestionAnswerAnswer,
      groundTruth: QuestionAnswerGroundTruth,
      question: 'string',
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    if(this.groundTruth && typeof (this.groundTruth as any).validate === 'function') {
      (this.groundTruth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

