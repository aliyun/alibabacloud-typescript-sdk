// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafQuotaString extends $dara.Model {
  regexp?: string;
  static names(): { [key: string]: string } {
    return {
      regexp: 'Regexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regexp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

