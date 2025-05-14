// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenDocQaResultResponseBodyDataParseQaResults extends $dara.Model {
  answer?: string;
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

