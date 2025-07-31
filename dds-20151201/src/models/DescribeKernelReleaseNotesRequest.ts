// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKernelReleaseNotesRequest extends $dara.Model {
  /**
   * @remarks
   * The minor version number of the instance. Example: **mongodb_20180522_0.4.8**.
   * 
   * *   This parameter is required. After you specify a version number for this parameter in a request, the release notes of the versions later than this version are returned.
   * 
   * @example
   * mongodb_20180522_0.4.8
   */
  kernelVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      kernelVersion: 'KernelVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kernelVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

