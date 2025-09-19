// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonTargetResultListResponseBodyTargetConfig extends $dara.Model {
  /**
   * @remarks
   * The identifier that indicates whether the configuration item is applied to the server. Valid values:
   * 
   * *   **add**: applied
   * *   **del**: not applied
   * 
   * @example
   * del
   */
  flag?: string;
  /**
   * @remarks
   * The default identifier.
   * 
   * @example
   * add
   */
  targetDefault?: string;
  /**
   * @remarks
   * An array that consists of the IDs of the server groups or the UUIDs of the servers.
   * 
   * >  If **uuid** is returned for the **TargetType** parameter, **UUIDs** of the servers are returned. If **groupId** is returned for the **TargetType** parameter, IDs of the server groups are returned.
   */
  targetList?: string[];
  /**
   * @remarks
   * The type of the server to which the configuration item is applied. Valid values:
   * 
   * *   **uuid**: a server
   * *   **groupId**: a server group
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: string;
  /**
   * @remarks
   * The type of the configuration item. Valid values:
   * 
   * *   **webshell_timescan**: webshell detection and removal
   * *   **aliscriptengine**: in-depth detection engine
   * *   **alidetect**: installation scope of local file detection
   * *   **alidetect-scan-enable**: detection scope of local file detection
   * 
   * @example
   * webshell_timescan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      targetDefault: 'TargetDefault',
      targetList: 'TargetList',
      targetType: 'TargetType',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      targetDefault: 'string',
      targetList: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
      totalCount: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonTargetResultListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the configuration item.
   */
  targetConfig?: DescribeCommonTargetResultListResponseBodyTargetConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetConfig: DescribeCommonTargetResultListResponseBodyTargetConfig,
    };
  }

  validate() {
    if(this.targetConfig && typeof (this.targetConfig as any).validate === 'function') {
      (this.targetConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

