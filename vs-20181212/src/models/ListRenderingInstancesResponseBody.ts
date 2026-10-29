// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstancesResponseBodyRenderingInstances extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Postpaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the cloud application service instance was created. The time is in UTC and follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2023-11-17T02:18:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2023-11-17T02:18:04Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * TestInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth limit. Unit: Mbit/s. A value of 0 indicates that no bandwidth limit is configured.
   * 
   * @example
   * 20
   */
  maxEgressBandwidth?: string;
  /**
   * @remarks
   * The maximum inbound bandwidth limit. Unit: Mbit/s. A value of 0 indicates that no bandwidth limit is configured.
   * 
   * @example
   * 10
   */
  maxIngressBandwidth?: string;
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The instance type of the cloud application service instance.
   * 
   * @example
   * crs.cp.l1
   */
  renderingSpec?: string;
  /**
   * @remarks
   * The status of the service host.
   * 
   * @example
   * running
   */
  serverStatus?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Working
   */
  status?: string;
  /**
   * @remarks
   * The cloud storage capacity. Unit: GB.
   * 
   * @example
   * 100
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      expireTime: 'ExpireTime',
      instanceName: 'InstanceName',
      maxEgressBandwidth: 'MaxEgressBandwidth',
      maxIngressBandwidth: 'MaxIngressBandwidth',
      renderingInstanceId: 'RenderingInstanceId',
      renderingSpec: 'RenderingSpec',
      serverStatus: 'ServerStatus',
      status: 'Status',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      creationTime: 'string',
      expireTime: 'string',
      instanceName: 'string',
      maxEgressBandwidth: 'string',
      maxIngressBandwidth: 'string',
      renderingInstanceId: 'string',
      renderingSpec: 'string',
      serverStatus: 'string',
      status: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRenderingInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud application service instances.
   */
  renderingInstances?: ListRenderingInstancesResponseBodyRenderingInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud application service instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      renderingInstances: 'RenderingInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstances: { 'type': 'array', 'itemType': ListRenderingInstancesResponseBodyRenderingInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.renderingInstances)) {
      $dara.Model.validateArray(this.renderingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

