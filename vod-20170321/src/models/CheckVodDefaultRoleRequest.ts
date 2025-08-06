// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckVodDefaultRoleRequest extends $dara.Model {
  ownerId?: string;
  resourceRealOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      resourceRealOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

