// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnterpriseInfoRequest extends $dara.Model {
  enterpriseVersion?: string;
  havanaId?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseVersion: 'EnterpriseVersion',
      havanaId: 'HavanaId',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseVersion: 'string',
      havanaId: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

