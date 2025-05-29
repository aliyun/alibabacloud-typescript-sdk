// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes } from "./DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes";


export class DescribeCenAttachedChildInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-5mv960yjhja0dh****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the network instance was attached to the CEN instance.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-30T07:53Z
   */
  childInstanceAttachTime?: string;
  /**
   * @remarks
   * The details about the network instance.
   */
  childInstanceAttributes?: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-2zebdboka7d7t37vo****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The name of the network instance.
   * 
   * @example
   * defaultvpc
   */
  childInstanceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the network instance belongs.
   * 
   * @example
   * 1688000000000000
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the network instance.
   * 
   * @example
   * cn-beijing
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **VBR**: VBR
   * *   **CCN**: CCN instance
   * 
   * @example
   * VPC
   */
  childInstanceType?: string;
  managedService?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADD98358-D265-4060-87CB-A2427F5A8944
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the network instance is attached to the CEN instance.
   * 
   * *   **Attaching**: The network instance is being attached to the CEN instance.
   * *   **Attached**: The network instance is attached to the CEN instance.
   * *   **Detaching**: The network instance is being detached from the CEN instance.
   * 
   * @example
   * Attached
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceAttachTime: 'ChildInstanceAttachTime',
      childInstanceAttributes: 'ChildInstanceAttributes',
      childInstanceId: 'ChildInstanceId',
      childInstanceName: 'ChildInstanceName',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      managedService: 'ManagedService',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceAttachTime: 'string',
      childInstanceAttributes: DescribeCenAttachedChildInstanceAttributeResponseBodyChildInstanceAttributes,
      childInstanceId: 'string',
      childInstanceName: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      managedService: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.childInstanceAttributes && typeof (this.childInstanceAttributes as any).validate === 'function') {
      (this.childInstanceAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

