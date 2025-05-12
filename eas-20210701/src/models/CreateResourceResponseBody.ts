// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The user ID (UID) of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
      ownerUid: 'OwnerUid',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerUid: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

