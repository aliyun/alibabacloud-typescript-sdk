// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DriveLogDetailUpdateTo } from "./DriveLogDetailUpdateTo";


export class DriveLogDetail extends $dara.Model {
  forceDelete?: boolean;
  handoverOwnerName?: string;
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  totalSize?: number;
  updateTo?: DriveLogDetailUpdateTo;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'force_delete',
      handoverOwnerName: 'handover_owner_name',
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      totalSize: 'total_size',
      updateTo: 'update_to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
      handoverOwnerName: 'string',
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      totalSize: 'number',
      updateTo: DriveLogDetailUpdateTo,
    };
  }

  validate() {
    if(this.updateTo && typeof (this.updateTo as any).validate === 'function') {
      (this.updateTo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

