// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolardbxSupabaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * The dashboard password.
   * 
   * This parameter is required.
   * 
   * @example
   * dTyMQem0o3HOAFh!
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Supabase实例
   */
  dbInstanceDescription?: string;
  /**
   * @remarks
   * The database password.
   * 
   * This parameter is required.
   * 
   * @example
   * dTyMQem0o3HOAFh!
   */
  dbPassword?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * - PREPAY: subscription.
   * - POSTPAY: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * - Year
   * - Month
   * - Hour
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * null
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-tenant mode.
   * 
   * @example
   * false
   */
  tenantMode?: boolean;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1ndoug37dtwoedlmru0
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      dashboardPassword: 'DashboardPassword',
      dbInstanceDescription: 'DbInstanceDescription',
      dbPassword: 'DbPassword',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tenantMode: 'TenantMode',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clientToken: 'string',
      dashboardPassword: 'string',
      dbInstanceDescription: 'string',
      dbPassword: 'string',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tenantMode: 'boolean',
      usedTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

