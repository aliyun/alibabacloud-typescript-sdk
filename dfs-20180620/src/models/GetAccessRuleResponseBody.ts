// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessRuleResponseBodyAccessRule extends $dara.Model {
  /**
   * @remarks
   * Permission group ID.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * Permission group rule ID.
   * 
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
  /**
   * @remarks
   * Creation Time of the permission group rule.
   * 
   * @example
   * 2022-04-18T08:02:09.986217Z
   */
  createTime?: string;
  /**
   * @remarks
   * Description of the permission group rule.
   * 
   * @example
   * 日志上传机器网段
   */
  description?: string;
  /**
   * @remarks
   * IP address or network segment of the authorization object.
   * 
   * @example
   * 192.0.2.0/24
   */
  networkSegment?: string;
  /**
   * @remarks
   * Priority of the permission group rule.
   * 
   * When the same authorization object matches multiple rules, the rule with the higher priority takes effect.
   * 
   * Valid values: 1 to 100. A value of 1 indicates the highest priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * Read and write permission of the authorization object on the file system.
   * 
   * Valid values:
   * 
   * - RDWR: read-write
   * - RDONLY: read-only
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      createTime: 'CreateTime',
      description: 'Description',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      createTime: 'string',
      description: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of permission group rule information.
   */
  accessRule?: GetAccessRuleResponseBodyAccessRule;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessRule: 'AccessRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRule: GetAccessRuleResponseBodyAccessRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessRule && typeof (this.accessRule as any).validate === 'function') {
      (this.accessRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

