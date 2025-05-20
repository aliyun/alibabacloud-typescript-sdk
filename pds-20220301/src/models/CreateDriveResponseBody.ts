// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDriveResponseBody extends $dara.Model {
  createdAt?: string;
  creator?: string;
  description?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  driveName?: string;
  driveType?: string;
  owner?: string;
  ownerType?: string;
  status?: string;
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      owner: 'owner',
      ownerType: 'owner_type',
      status: 'status',
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      owner: 'string',
      ownerType: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

