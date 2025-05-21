// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiDeployConfigCustomDomainInfos extends $dara.Model {
  domainId?: string;
  name?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

