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

