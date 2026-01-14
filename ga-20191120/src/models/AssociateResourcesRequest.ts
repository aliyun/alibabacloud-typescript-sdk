// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @example
   * Associated
   */
  associatedMode?: string;
  /**
   * @example
   * waf_xx
   */
  associatedResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  associatedResourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WAF
   */
  associatedResourceType?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
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

