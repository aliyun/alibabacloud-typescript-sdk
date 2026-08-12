// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecModuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to obtain the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm**
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
   * The compliance review status. Valid values: 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The name of the protected object group to which the protected object is added.
   * 
   * > You must specify at least one of **Resources** and **ResourceGroups**.
   * 
   * @example
   * group1
   */
  resourceGroups?: string;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * > You must specify at least one of **Resources** and **ResourceGroups**.
   * 
   * @example
   * cwaf-***-waf
   */
  resources?: string;
  /**
   * @remarks
   * The tracing audit status. Valid values: 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  traceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      reportStatus: 'ReportStatus',
      resourceGroups: 'ResourceGroups',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resources: 'Resources',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      reportStatus: 'number',
      resourceGroups: 'string',
      resourceManagerResourceGroupId: 'string',
      resources: 'string',
      traceStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

