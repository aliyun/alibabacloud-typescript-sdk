// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-zz11zcl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The protected object to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-wewbb23dfsetetcic1242-0****
   */
  resource?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The log enabling status of the protected object. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The Tracing Analysis configuration.
   * 
   * @example
   * {"Workspace":"cms-test","RatePerMille":90}
   */
  traceConfigShrink?: string;
  /**
   * @remarks
   * The Tracing Analysis status. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * > To enable Tracing Analysis, you must first enable the log status **Status** for the protected object.
   * 
   * @example
   * true
   */
  traceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resource: 'Resource',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      status: 'Status',
      traceConfigShrink: 'TraceConfig',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resource: 'string',
      resourceManagerResourceGroupId: 'string',
      status: 'boolean',
      traceConfigShrink: 'string',
      traceStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

