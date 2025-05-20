// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DriveLogDetailUpdateTo extends $dara.Model {
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

