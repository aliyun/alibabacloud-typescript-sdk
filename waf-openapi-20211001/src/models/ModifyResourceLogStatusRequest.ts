// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourceLogStatusRequestTraceConfig extends $dara.Model {
  /**
   * @remarks
   * The per-mille sampling rate for Tracing Analysis.
   * 
   * @example
   * 90
   */
  ratePerMille?: number;
  /**
   * @remarks
   * The Hybrid Cloud Monitoring 2.0 workspace.
   * 
   * @example
   * cms-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      ratePerMille: 'RatePerMille',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratePerMille: 'number',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyResourceLogStatusRequest extends $dara.Model {
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
  traceConfig?: ModifyResourceLogStatusRequestTraceConfig;
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
      traceConfig: 'TraceConfig',
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
      traceConfig: ModifyResourceLogStatusRequestTraceConfig,
      traceStatus: 'boolean',
    };
  }

  validate() {
    if(this.traceConfig && typeof (this.traceConfig as any).validate === 'function') {
      (this.traceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

