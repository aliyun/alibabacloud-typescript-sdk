// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchIntrudeDomainsShrinkRequest extends $dara.Model {
  domainNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      domainNamesShrink: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

