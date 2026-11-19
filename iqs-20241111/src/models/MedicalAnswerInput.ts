// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalAnswerInput extends $dara.Model {
  /**
   * @remarks
   * The medical question to be answered.
   * 
   * @example
   * What should I do for a stomachache?
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

