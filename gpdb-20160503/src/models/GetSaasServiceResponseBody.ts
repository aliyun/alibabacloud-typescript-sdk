// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaasServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compute resource of the service.
   * 
   * @example
   * 1
   */
  cu?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - **POSTPAY**: pay-as-you-go
   * - **PREPAY**: subscription
   * 
   * > - If this parameter is not specified, the default value is pay-as-you-go.
   * > - In subscription billing mode, a discount is available when you purchase a duration of one year or longer. Select a billing type as needed.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The region ID where the service resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * agdb-xxxxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **drama**
   * - **memroy**
   * 
   * @example
   * drama
   */
  serviceType?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * - **creating**: Being created.
   * - **active**: Running.
   * 
   * @example
   * creating
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID where the service resides.
   * 
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

