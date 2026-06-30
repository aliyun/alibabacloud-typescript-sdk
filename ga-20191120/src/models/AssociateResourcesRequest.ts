// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateResourcesRequest extends $dara.Model {
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
   * Association pattern:  
   * - **Managed**: Managed mode. GA restricts user operations based on management policies. Currently, no resources use this type.  
   * - **Associated** (default): Loose coupling association. GA does not restrict user operations. WAF uses loose coupling.
   * 
   * @example
   * Associated
   */
  associatedMode?: string;
  /**
   * @remarks
   * Resource ID of the linked instance.
   * 
   * @example
   * waf_xx
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * Region of the linked instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @remarks
   * Resource type of the linked instance.
   * 
   * This parameter is required.
   * 
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
   * @remarks
   * Indicates whether to perform a dry run of the request. Valid values:  
   * - **true**: Sends a dry run request without associating resources. Checks include required parameters, request format, and business restrictions. If the check fails, an error is returned. If the check passes, an HTTP 2xx status code is returned.  
   * - **false** (Default Value): Sends a normal request. If the check passes, an HTTP 2xx status code is returned and the endpoint group is created immediately.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Region ID of the basic Alibaba Cloud Global Accelerator (GA) instance. Valid value: **cn-hangzhou** only.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      associatedMode: 'AssociatedMode',
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
      associatedMode: 'string',
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

