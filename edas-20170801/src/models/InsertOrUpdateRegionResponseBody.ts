// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertOrUpdateRegionResponseBodyUserDefineRegionEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the namespace belongs.
   * 
   * @example
   * cn-beijing
   */
  belongRegion?: string;
  /**
   * @remarks
   * Indicates whether remote debugging is enabled. Valid values:
   * 
   * *   true: Remote debugging is enabled.
   * *   false: Remote debugging is disabled.
   * 
   * @example
   * false
   */
  debugEnable?: boolean;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * Logical region
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the namespace is created or modified. If this parameter is left empty or 0 is returned, the namespace is created. Otherwise, the namespace is modified.
   * 
   * @example
   * 15160
   */
  id?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * *   The ID of a custom namespace is in the `region ID:namespace identifier` format. Example: cn-beijing:tdy218.
   * *   The ID of the default namespace is in the `region ID` format. Example: cn-beijing.
   * 
   * @example
   * cn-beijing:test
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test_region
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the custom namespace belongs.
   * 
   * @example
   * edas_****_test@aliyun-****.com
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      regionId: 'RegionId',
      regionName: 'RegionName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      regionId: 'string',
      regionName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertOrUpdateRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 37793352-C568-4A5A-BF69-4DC853******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the custom namespace.
   */
  userDefineRegionEntity?: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionEntity: 'UserDefineRegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      userDefineRegionEntity: InsertOrUpdateRegionResponseBodyUserDefineRegionEntity,
    };
  }

  validate() {
    if(this.userDefineRegionEntity && typeof (this.userDefineRegionEntity as any).validate === 'function') {
      (this.userDefineRegionEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

