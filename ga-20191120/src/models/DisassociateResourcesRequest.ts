// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud Global Accelerator (GA) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Linked instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cd498437eb9a346c38be8482689800e91
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * Region ID of the linked instance.
   * 
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @remarks
   * Resource type of the linked peripheral resource.
   * 
   * This parameter is required.
   * 
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run of the request. Valid values:  
   * - **true**: Sends a dry run request without detaching the resource. The system checks whether required parameters are specified, whether the request format is valid, and whether business limits are met. If the check fails, an error is returned. If the check passes, an HTTP 2xx status code is returned.  
   * - **false** (default): Sends a normal request. If the check passes, an HTTP 2xx status code is returned and the endpoint group is created immediately.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Region ID of the Alibaba Cloud Global Accelerator (GA) instance. Valid value: **cn-hangzhou** only.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      associatedResourceId: 'AssociatedResourceId',
      associatedResourceRegionId: 'AssociatedResourceRegionId',
      associatedResourceType: 'AssociatedResourceType',
      dryRun: 'DryRun',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      associatedResourceId: 'string',
      associatedResourceRegionId: 'string',
      associatedResourceType: 'string',
      dryRun: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

