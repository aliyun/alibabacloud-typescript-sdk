// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallPolarClawSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The task-level target agent (workspace). If not specified, the default agent is used.
   * 
   * @example
   * test1
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region details.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task-level scope. Valid values: workspace (default) and global. This parameter is mutually exclusive with AgentId.
   * 
   * @example
   * global
   */
  scope?: string;
  /**
   * @remarks
   * The names of the skills to uninstall.
   * 
   * This parameter is required.
   * 
   * @example
   * ["polarclawhub","github"]
   */
  uninstallSkillNames?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      regionId: 'RegionId',
      scope: 'Scope',
      uninstallSkillNames: 'UninstallSkillNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      regionId: 'string',
      scope: 'string',
      uninstallSkillNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

