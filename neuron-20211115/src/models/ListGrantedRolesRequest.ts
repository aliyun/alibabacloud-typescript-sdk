// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantedRolesRequest extends $dara.Model {
  authorizerId?: string;
  authorizerType?: string;
  enterpriseId?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'authorizerId',
      authorizerType: 'authorizerType',
      enterpriseId: 'enterpriseId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      authorizerType: 'string',
      enterpriseId: 'number',
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

