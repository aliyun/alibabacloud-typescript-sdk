// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiRouteConflictInfoDomainInfo extends $dara.Model {
  domainId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

