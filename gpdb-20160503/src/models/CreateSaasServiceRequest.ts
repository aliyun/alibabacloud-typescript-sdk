// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSaasServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The compute resources of the SaaS service.
   * 
   * @example
   * 1
   */
  cu?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * > - If you leave this parameter empty, a Free service is created by default.
   * > - The subscription billing method offers discounts for purchases of one year or longer. Select a billing method as needed.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the duration for which you want to purchase the resource. Valid values:
   * - **Month**: month.
   * - **Year**: year.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * deprecated
   */
  plan?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **memroy**
   * - **drama**.
   * 
   * This parameter is required.
   * 
   * @example
   * drama
   */
  serviceType?: string;
  /**
   * @remarks
   * The duration for which you want to purchase the resource. Valid values:
   * - If **Period** is set to **Month**, the valid values are 1 to 11.
   * - If **Period** is set to **Year**, the valid values are 1 to 3.
   * 
   * > This parameter is required when you create a subscription instance.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  /**
   * @remarks
   * The workspace of the SaaS service.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cu: 'Cu',
      payType: 'PayType',
      period: 'Period',
      plan: 'Plan',
      regionId: 'RegionId',
      serviceType: 'ServiceType',
      usedTime: 'UsedTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      payType: 'string',
      period: 'string',
      plan: 'string',
      regionId: 'string',
      serviceType: 'string',
      usedTime: 'string',
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

