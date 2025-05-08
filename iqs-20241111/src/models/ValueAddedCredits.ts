// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValueAddedCredits extends $dara.Model {
  advanced?: number;
  summary?: number;
  static names(): { [key: string]: string } {
    return {
      advanced: 'advanced',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanced: 'number',
      summary: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

