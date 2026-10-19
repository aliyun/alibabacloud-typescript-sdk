// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKernelReleaseNotesRequest extends $dara.Model {
  /**
   * @remarks
   * The minor engine version of the database. Example: **mongodb_20180522_0.4.8**.
   * 
   * You can obtain the minor engine version in the **Specifications** section on the **Basic Information** page of the instance in the MongoDB console.
   * > This parameter is required. The response includes a list of versions that are later than the specified version.
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

