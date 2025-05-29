// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs } from "./DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs";


export class DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntry extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the cloud service is accessed.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-pfa6ugf3xl0qsd****
   */
  cenId?: string;
  /**
   * @remarks
   * The service addresses of the cloud service.
   */
  cidrs?: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs;
  /**
   * @remarks
   * The description of the cloud service.
   * 
   * @example
   * descname
   */
  description?: string;
  /**
   * @remarks
   * The service address of the cloud service.
   * 
   * @example
   * 100.118.28.0/24
   */
  host?: string;
  /**
   * @remarks
   * The region ID of the cloud service.
   * 
   * @example
   * cn-hangzhou
   */
  hostRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the cloud service.
   * 
   * @example
   * vpc-bp1h8vbrbcgohcju5****
   */
  hostVpcId?: string;
  /**
   * @remarks
   * The status of the cloud service. Valid values:
   * 
   * *   **Creating**
   * *   **Active**
   * *   **Deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      cidrs: 'Cidrs',
      description: 'Description',
      host: 'Host',
      hostRegionId: 'HostRegionId',
      hostVpcId: 'HostVpcId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      cidrs: DescribeRouteServicesInCenResponseBodyRouteServiceEntriesRouteServiceEntryCidrs,
      description: 'string',
      host: 'string',
      hostRegionId: 'string',
      hostVpcId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.cidrs && typeof (this.cidrs as any).validate === 'function') {
      (this.cidrs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

