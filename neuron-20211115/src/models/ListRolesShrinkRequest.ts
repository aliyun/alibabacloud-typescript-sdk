// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesShrinkRequest extends $dara.Model {
  authorizerId?: string;
  authorizerType?: string;
  enterpriseId?: number;
  name?: string;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  platform?: string;
  roleIdsShrink?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'authorizerId',
      authorizerType: 'authorizerType',
      enterpriseId: 'enterpriseId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      platform: 'platform',
      roleIdsShrink: 'roleIds',
      roleType: 'roleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      authorizerType: 'string',
      enterpriseId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      roleIdsShrink: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

