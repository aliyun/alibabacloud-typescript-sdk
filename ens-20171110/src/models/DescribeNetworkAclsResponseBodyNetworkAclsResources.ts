// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAclsResponseBodyNetworkAclsResources extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-fuzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * n-****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * Network
   */
  resourceType?: string;
  /**
   * @remarks
   * The association status of the resource. Valid values:
   * 
   * *   **BINDED**: The resource is associated with the network ACL.
   * *   **BINDING**: The resource is being associated with the network ACL.
   * *   **UNBINDING**: The resource is being disassociated from the network ACL.
   * 
   * @example
   * BINDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

