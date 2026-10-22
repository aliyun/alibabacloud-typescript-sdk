// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveDatabasesToNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs of the databases that you want to move to the network domain.
   */
  databaseIds?: string[];
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zpr3h2zo60l
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to which you want to move the databases.
   * > You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkDomainId: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

