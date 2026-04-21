// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalKnowInput extends $dara.Model {
  query?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

