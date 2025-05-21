// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizationResourceInfo extends $dara.Model {
  environmentId?: string;
  parentResourceId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      parentResourceId: 'parentResourceId',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      parentResourceId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

