// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessRuleResponseBodyAccessRule extends $dara.Model {
  /**
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
  createTime?: string;
  description?: string;
  /**
   * @example
   * 192.0.2.0/24
   */
  networkSegment?: string;
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * RDWR
   */
  RWAccessType?: string;
  /**
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
  accessRule?: GetAccessRuleResponseBodyAccessRule;
  /**
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

