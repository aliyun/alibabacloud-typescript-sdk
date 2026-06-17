// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasServiceResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  cu?: string;
  /**
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @example
   * agdb-xxxxx
   */
  serviceName?: string;
  /**
   * @example
   * drama
   */
  serviceType?: string;
  /**
   * @example
   * creating
   */
  status?: string;
  /**
   * @example
   * ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      payType: 'PayType',
      regionId: 'RegionId',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'string',
      payType: 'string',
      regionId: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

