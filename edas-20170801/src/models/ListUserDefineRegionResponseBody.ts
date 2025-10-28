// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDefineRegionResponseBodyUserDefineRegionListUserDefineRegionEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to which the namespace belongs.
   * 
   * @example
   * cn-shenzhen
   */
  belongRegion?: string;
  /**
   * @remarks
   * Indicates whether remote debugging is allowed.
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
   * betaappManager
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the namespace.
   * 
   * @example
   * 1330
   */
  id?: number;
  /**
   * @remarks
   * The type of the registry. Valid values:
   * 
   * *   default: shared service registry of Enterprise Distributed Application Service (EDAS)
   * *   exclusive_mse: Microservices Engine (MSE) Nacos registry
   * 
   * @example
   * default: EDAS
   */
  mseInstanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * > The ID cannot be changed after the namespace is created. The ID is in the `Physical region ID:Logical region identifier` format .
   * 
   * @example
   * cn-shenzhen:betaappManager
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * betaappManager
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the MSE instance.
   * 
   * @example
   * mse_prepaid_public_cn-tl32n******
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the namespace belongs.
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
   * b197-40ab-9155-****
   */
  requestId?: string;
  /**
   * @remarks
   * The namespaces.
   */
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

