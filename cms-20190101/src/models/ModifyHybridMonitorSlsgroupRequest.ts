// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridMonitorSLSGroupRequestSLSGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The Logstore.
   * 
   * Valid values of N: 1 to 25.
   * 
   * This parameter is required.
   * 
   * @example
   * Logstore-aliyun-all
   */
  SLSLogstore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * Valid values of N: 1 to 25.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun-project
   */
  SLSProject?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * Valid values of N: 1 to 25.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  SLSRegion?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * Valid values of N: 1 to 25.
   * 
   * If you call this operation by using the management account of a resource directory, you can connect the Alibaba Cloud services that are activated for all members in the resource directory to Hybrid Cloud Monitoring. You can use the resource directory to monitor Alibaba Cloud services across enterprise accounts.
   * 
   * > If a member uses CloudMonitor for the first time, you must make sure that the service-linked role AliyunServiceRoleForCloudMonitor is attached to the member. For more information, see [Manage the service-linked role for CloudMonitor](https://help.aliyun.com/document_detail/170423.html).
   * 
   * @example
   * 120886317861****
   */
  SLSUserId?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogstore: 'SLSLogstore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      SLSUserId: 'SLSUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogstore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      SLSUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorSLSGroupRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The configurations of the Logstore group.
   * 
   * Valid values of N: 1 to 25.
   * 
   * This parameter is required.
   */
  SLSGroupConfig?: ModifyHybridMonitorSLSGroupRequestSLSGroupConfig[];
  /**
   * @remarks
   * The description of the Logstore group.
   */
  SLSGroupDescription?: string;
  /**
   * @remarks
   * The name of the Logstore group.
   * 
   * For information about how to obtain the name of a Logstore group, see [DescribeHybridMonitorSLSGroup](https://help.aliyun.com/document_detail/429526.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Logstore_test
   */
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      SLSGroupConfig: 'SLSGroupConfig',
      SLSGroupDescription: 'SLSGroupDescription',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      SLSGroupConfig: { 'type': 'array', 'itemType': ModifyHybridMonitorSLSGroupRequestSLSGroupConfig },
      SLSGroupDescription: 'string',
      SLSGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.SLSGroupConfig)) {
      $dara.Model.validateArray(this.SLSGroupConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

