// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthorizedResourcesRequest extends $dara.Model {
  nextToken?: string;
  permissionCode?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      permissionCode: 'PermissionCode',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      permissionCode: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

