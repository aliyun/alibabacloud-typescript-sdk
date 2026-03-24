// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApisecModuleStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_elasticity-cn-0xldbqtm**
   */
  instanceId?: string;
  /**
   * @remarks
   * The region in which the WAF instance resides. Valid values:
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
   * Indicates whether to enable the compliance review feature. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  reportStatus?: number;
  /**
   * @remarks
   * The name of the protected object group for which you want to modify the API security module status.
   * 
   * @example
   * group1
   */
  resourceGroups?: string;
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
   * The name of the protected object for which you want to modify the API security module status.
   * 
   * @example
   * cwaf-***-waf
   */
  resources?: string;
  /**
   * @remarks
   * Indicates whether to enable the traceability audit feature. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
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

