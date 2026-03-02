// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvInfosRequest extends $dara.Model {
  enterpriseId?: number;
  env?: string;
  pbcId?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      env: 'env',
      pbcId: 'pbcId',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      env: 'string',
      pbcId: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

