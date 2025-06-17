// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchIntrudeDomainsRequest extends $dara.Model {
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domainNames)) {
      $dara.Model.validateArray(this.domainNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

