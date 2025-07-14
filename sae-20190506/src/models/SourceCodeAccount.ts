// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceCodeAccountOrganizations extends $dara.Model {
  avatarUrl?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
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

export class SourceCodeAccount extends $dara.Model {
  avatarUrl?: string;
  id?: string;
  name?: string;
  organizations?: SourceCodeAccountOrganizations[];
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      id: 'Id',
      name: 'Name',
      organizations: 'Organizations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      id: 'string',
      name: 'string',
      organizations: { 'type': 'array', 'itemType': SourceCodeAccountOrganizations },
    };
  }

  validate() {
    if(Array.isArray(this.organizations)) {
      $dara.Model.validateArray(this.organizations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

