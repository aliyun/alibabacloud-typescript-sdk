// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGlobalResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  regionId?: string;
  /**
   * @remarks
   * The resource name. PubPhoenixSLBQueryServerVip releases the public endpoint of the HBase SQL service.
   * 
   * This parameter is required.
   * 
   * @example
   * PubPhoenixSLBQueryServerVip
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * GLOBAL_VIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

