// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity extends $dara.Model {
  belongRegion?: string;
  debugEnable?: boolean;
  description?: string;
  id?: number;
  mseInstanceId?: string;
  regionId?: string;
  regionName?: string;
  registryType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      belongRegion: 'BelongRegion',
      debugEnable: 'DebugEnable',
      description: 'Description',
      id: 'Id',
      mseInstanceId: 'MseInstanceId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      registryType: 'RegistryType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongRegion: 'string',
      debugEnable: 'boolean',
      description: 'string',
      id: 'number',
      mseInstanceId: 'string',
      regionId: 'string',
      regionName: 'string',
      registryType: 'string',
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

export class ListUserDefineRegionResponseBodyUserDefineRegionList extends $dara.Model {
  userDefineRegionEntity?: ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity[];
  static names(): { [key: string]: string } {
    return {
      userDefineRegionEntity: 'UserDefineRegionEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userDefineRegionEntity: { 'type': 'array', 'itemType': ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity },
    };
  }

  validate() {
    if(Array.isArray(this.userDefineRegionEntity)) {
      $dara.Model.validateArray(this.userDefineRegionEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefineRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information.
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
   * b197-40ab-9155-****
   */
  requestId?: string;
  userDefineRegionList?: ListUserDefineRegionResponseBodyUserDefineRegionList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      userDefineRegionList: 'UserDefineRegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      userDefineRegionList: ListUserDefineRegionResponseBodyUserDefineRegionList,
    };
  }

  validate() {
    if(this.userDefineRegionList && typeof (this.userDefineRegionList as any).validate === 'function') {
      (this.userDefineRegionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

