// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetMonitorListRequest extends $tea.Model {
  corpId: string;
  pageNo: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetMonitorListResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetMonitorListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsRequest extends $tea.Model {
  deviceCodeList?: string;
  corpIdList?: string;
  name?: string;
  isPage: number;
  pageNum: number;
  pageSize: number;
  group?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCodeList: 'DeviceCodeList',
      corpIdList: 'CorpIdList',
      name: 'Name',
      isPage: 'IsPage',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCodeList: 'string',
      corpIdList: 'string',
      name: 'string',
      isPage: 'number',
      pageNum: 'number',
      pageSize: 'number',
      group: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  data: ListDeviceGroupsResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': ListDeviceGroupsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectRequest extends $tea.Model {
  corpId: string;
  objectType: string;
  startTime: number;
  endTime: number;
  pageNumber: number;
  pageSize: number;
  deviceList?: { [key: string]: any };
  picUrl?: string;
  conditions?: { [key: string]: any };
  algorithmType?: string;
  imagePath?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceList: 'DeviceList',
      picUrl: 'PicUrl',
      conditions: 'Conditions',
      algorithmType: 'AlgorithmType',
      imagePath: 'ImagePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      deviceList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      picUrl: 'string',
      conditions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      algorithmType: 'string',
      imagePath: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectShrinkRequest extends $tea.Model {
  corpId: string;
  objectType: string;
  startTime: number;
  endTime: number;
  pageNumber: number;
  pageSize: number;
  deviceListShrink?: string;
  picUrl?: string;
  conditionsShrink?: string;
  algorithmType?: string;
  imagePathShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      objectType: 'ObjectType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceListShrink: 'DeviceList',
      picUrl: 'PicUrl',
      conditionsShrink: 'Conditions',
      algorithmType: 'AlgorithmType',
      imagePathShrink: 'ImagePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      objectType: 'string',
      startTime: 'number',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      deviceListShrink: 'string',
      picUrl: 'string',
      conditionsShrink: 'string',
      algorithmType: 'string',
      imagePathShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: SearchObjectResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: SearchObjectResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesRequest extends $tea.Model {
  pageNum: number;
  pageSize: number;
  corpIdList: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      corpIdList: 'CorpIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      corpIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: DescribeDevicesResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: DescribeDevicesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  pageNumber: number;
  pageSize: number;
  personIdList?: { [key: string]: any };
  profileIdList?: { [key: string]: any };
  matchingRateThreshold?: string;
  faceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personIdList: 'PersonIdList',
      profileIdList: 'ProfileIdList',
      matchingRateThreshold: 'MatchingRateThreshold',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      profileIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      matchingRateThreshold: 'string',
      faceImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListShrinkRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  name?: string;
  catalogId?: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  pageNumber: number;
  pageSize: number;
  personIdListShrink?: string;
  profileIdListShrink?: string;
  matchingRateThreshold?: string;
  faceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personIdListShrink: 'PersonIdList',
      profileIdListShrink: 'ProfileIdList',
      matchingRateThreshold: 'MatchingRateThreshold',
      faceImageId: 'FaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personIdListShrink: 'string',
      profileIdListShrink: 'string',
      matchingRateThreshold: 'string',
      faceImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetProfileListResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetProfileListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  profileId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetProfileDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetProfileDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  catalogId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogId: 'CatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileCatalogResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPersonRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  personMatchingRate: string;
  personId: string;
  profileId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      personMatchingRate: 'PersonMatchingRate',
      personId: 'PersonId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      personMatchingRate: 'string',
      personId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPersonResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  name?: string;
  catalogId: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  profileId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPersonRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  profileId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPersonResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  name: string;
  catalogId: number;
  idNumber?: string;
  faceUrl?: string;
  liveAddress?: string;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  sceneType?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      name: 'Name',
      catalogId: 'CatalogId',
      idNumber: 'IdNumber',
      faceUrl: 'FaceUrl',
      liveAddress: 'LiveAddress',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      sceneType: 'SceneType',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      name: 'string',
      catalogId: 'number',
      idNumber: 'string',
      faceUrl: 'string',
      liveAddress: 'string',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      sceneType: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: AddProfileResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: AddProfileResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  catalogId: number;
  catalogName: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogId: 'number',
      catalogName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: UpdateProfileCatalogResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: UpdateProfileCatalogResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  catalogName: string;
  parentCatalogId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      catalogName: 'CatalogName',
      parentCatalogId: 'ParentCatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      catalogName: 'string',
      parentCatalogId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: AddProfileCatalogResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: AddProfileCatalogResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetCatalogListResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetCatalogListResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  profileId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      profileId: 'ProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      profileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProfileResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindCorpGroupRequest extends $tea.Model {
  corpId: string;
  corpGroupId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpGroupId: 'CorpGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindCorpGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindCorpGroupRequest extends $tea.Model {
  corpId: string;
  corpGroupId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpGroupId: 'CorpGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindCorpGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListUserGroupsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListUserGroupsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  faceUrl?: string;
  corpIdList?: { [key: string]: any };
  faceMatchingRateThreshold?: string;
  corpId?: string;
  personIdList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      faceUrl: 'FaceUrl',
      corpIdList: 'CorpIdList',
      faceMatchingRateThreshold: 'FaceMatchingRateThreshold',
      corpId: 'CorpId',
      personIdList: 'PersonIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      faceUrl: 'string',
      corpIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      faceMatchingRateThreshold: 'string',
      corpId: 'string',
      personIdList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListShrinkRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  faceUrl?: string;
  corpIdListShrink?: string;
  faceMatchingRateThreshold?: string;
  corpId?: string;
  personIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      faceUrl: 'FaceUrl',
      corpIdListShrink: 'CorpIdList',
      faceMatchingRateThreshold: 'FaceMatchingRateThreshold',
      corpId: 'CorpId',
      personIdListShrink: 'PersonIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      faceUrl: 'string',
      corpIdListShrink: 'string',
      faceMatchingRateThreshold: 'string',
      corpId: 'string',
      personIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetPersonListResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetPersonListResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  pageNumber: number;
  pageSize: number;
  personList?: { [key: string]: any };
  userList?: { [key: string]: any };
  matchingRateThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personList: 'PersonList',
      userList: 'UserList',
      matchingRateThreshold: 'MatchingRateThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      matchingRateThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersShrinkRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userName?: string;
  userGroupId?: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  pageNumber: number;
  pageSize: number;
  personListShrink?: string;
  userListShrink?: string;
  matchingRateThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      personListShrink: 'PersonList',
      userListShrink: 'UserList',
      matchingRateThreshold: 'MatchingRateThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      personListShrink: 'string',
      userListShrink: 'string',
      matchingRateThreshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListUsersResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListUsersResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userName: string;
  userGroupId: number;
  idNumber?: string;
  faceImageUrl?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: CreateUserResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: CreateUserResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  matchingRate: string;
  personId: string;
  userId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      matchingRate: 'MatchingRate',
      personId: 'PersonId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      matchingRate: 'string',
      personId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindUserResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userId: number;
  needFaceDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
      needFaceDetail: 'NeedFaceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
      needFaceDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetUserDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetUserDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageRequest extends $tea.Model {
  imageUrl: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userGroupId: number;
  userGroupName: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      userGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: UpdateUserGroupResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: UpdateUserGroupResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userGroupName: string;
  parentUserGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupName: 'UserGroupName',
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupName: 'string',
      parentUserGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: CreateUserGroupResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: CreateUserGroupResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindUserResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userName?: string;
  userGroupId: number;
  idNumber?: string;
  faceImageUrl?: string;
  faceImageContent?: string;
  address?: string;
  age?: number;
  gender?: number;
  plateNo?: string;
  phoneNo?: string;
  attachment?: string;
  bizId?: string;
  userId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      faceImageContent: 'FaceImageContent',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      faceImageContent: 'string',
      address: 'string',
      age: 'number',
      gender: 'number',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userId: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponse extends $tea.Model {
  code: string;
  data: boolean;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  corpId?: string;
  isvSubId: string;
  userGroupId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvSubId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountRequest extends $tea.Model {
  corpId: string;
  pageNumber: number;
  pageSize: number;
  startTime: string;
  endTime: string;
  aggregateType: string;
  tagCode: string;
  timeAggregateType: string;
  minVal?: number;
  maxVal?: number;
  countType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      aggregateType: 'AggregateType',
      tagCode: 'TagCode',
      timeAggregateType: 'TimeAggregateType',
      minVal: 'MinVal',
      maxVal: 'MaxVal',
      countType: 'CountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
      aggregateType: 'string',
      tagCode: 'string',
      timeAggregateType: 'string',
      minVal: 'number',
      maxVal: 'number',
      countType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountResponse extends $tea.Model {
  code: string;
  message: string;
  pageNo: string;
  pageSize: string;
  requestId: string;
  success: string;
  totalCount: string;
  data: ListPersonVisitCountResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
      data: { 'type': 'array', 'itemType': ListPersonVisitCountResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsRequest extends $tea.Model {
  corpId: string;
  eventType: string;
  dataSourceId?: string;
  startTime: string;
  endTime: string;
  pageNumber: number;
  pageSize: number;
  sourceId?: string;
  recordId?: string;
  eventValue?: string;
  extendValue?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      eventType: 'EventType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceId: 'SourceId',
      recordId: 'RecordId',
      eventValue: 'EventValue',
      extendValue: 'ExtendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      eventType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceId: 'string',
      recordId: 'string',
      eventValue: 'string',
      extendValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsResponse extends $tea.Model {
  code: string;
  message: string;
  pageNumber: number;
  pageSize: number;
  requestId: string;
  success: string;
  totalCount: number;
  data: ListEventAlgorithmDetailsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': ListEventAlgorithmDetailsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsRequest extends $tea.Model {
  corpId: string;
  tagCode: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  userGroupList?: string;
  deviceGroupList?: string;
  deviceIdList?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userGroupList: 'UserGroupList',
      deviceGroupList: 'DeviceGroupList',
      deviceIdList: 'DeviceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      userGroupList: 'string',
      deviceGroupList: 'string',
      deviceIdList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsResponse extends $tea.Model {
  code: string;
  message: string;
  pageNumber: number;
  pageSize: number;
  requestId: string;
  success: string;
  totalCount: number;
  data: ListCorpMetricsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': ListCorpMetricsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceRequest extends $tea.Model {
  startTime: string;
  corpId?: string;
  pageNumber: string;
  pageSize: string;
  endTime: string;
  dataSourceId?: string;
  personId?: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      endTime: 'EndTime',
      dataSourceId: 'DataSourceId',
      personId: 'PersonId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      corpId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      endTime: 'string',
      dataSourceId: 'string',
      personId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: string;
  totalCount: number;
  pageSize: number;
  pageNumber: number;
  data: ListPersonTraceResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': ListPersonTraceResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsRequest extends $tea.Model {
  startTime: string;
  tagCode: string;
  endTime: string;
  groupId: string;
  pageNumber: string;
  pageSize: string;
  deviceId?: string;
  corpId?: string;
  userGroup?: string;
  deviceGroup?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      tagCode: 'TagCode',
      endTime: 'EndTime',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      deviceId: 'DeviceId',
      corpId: 'CorpId',
      userGroup: 'UserGroup',
      deviceGroup: 'DeviceGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
      tagCode: 'string',
      endTime: 'string',
      groupId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      deviceId: 'string',
      corpId: 'string',
      userGroup: 'string',
      deviceGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  success: string;
  data: ListCorpGroupMetricsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      success: 'string',
      data: { 'type': 'array', 'itemType': ListCorpGroupMetricsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultRequest extends $tea.Model {
  pictureId: string;
  pictureContent?: string;
  pictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      pictureId: 'PictureId',
      pictureContent: 'PictureContent',
      pictureUrl: 'PictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pictureId: 'string',
      pictureContent: 'string',
      pictureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetFaceModelResultResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetFaceModelResultResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpGroupRequest extends $tea.Model {
  corpId: string;
  groupId: string;
  clientToken: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      groupId: 'GroupId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      groupId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsRequest extends $tea.Model {
  corpId: string;
  pageNumber: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListCorpGroupsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListCorpGroupsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorpGroupRequest extends $tea.Model {
  corpId: string;
  groupId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCorpGroupResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelRequest extends $tea.Model {
  picId: string;
  corpId: string;
  picPath?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      picId: 'PicId',
      corpId: 'CorpId',
      picPath: 'PicPath',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picId: 'string',
      corpId: 'string',
      picPath: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: InvokeMotorModelResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: InvokeMotorModelResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigRequest extends $tea.Model {
  deviceSn: string;
  deviceTimeStamp: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponse extends $tea.Model {
  audioEnable: boolean;
  audioFormat: string;
  bitRate: string;
  code: string;
  deviceAddress: string;
  deviceName: string;
  encodeFormat: string;
  frameRate: string;
  govLength: number;
  latitude: string;
  longitude: string;
  message: string;
  OSDTimeEnable: string;
  OSDTimeType: string;
  OSDTimeX: string;
  OSDTimeY: string;
  requestId: string;
  resolution: string;
  retryInterval: string;
  deviceId: string;
  userName: string;
  passWord: string;
  protocol: string;
  serverId: string;
  serverPort: string;
  serverIp: string;
  OSDList: GetDeviceConfigResponseOSDList[];
  static names(): { [key: string]: string } {
    return {
      audioEnable: 'AudioEnable',
      audioFormat: 'AudioFormat',
      bitRate: 'BitRate',
      code: 'Code',
      deviceAddress: 'DeviceAddress',
      deviceName: 'DeviceName',
      encodeFormat: 'EncodeFormat',
      frameRate: 'FrameRate',
      govLength: 'GovLength',
      latitude: 'Latitude',
      longitude: 'Longitude',
      message: 'Message',
      OSDTimeEnable: 'OSDTimeEnable',
      OSDTimeType: 'OSDTimeType',
      OSDTimeX: 'OSDTimeX',
      OSDTimeY: 'OSDTimeY',
      requestId: 'RequestId',
      resolution: 'Resolution',
      retryInterval: 'RetryInterval',
      deviceId: 'DeviceId',
      userName: 'UserName',
      passWord: 'PassWord',
      protocol: 'Protocol',
      serverId: 'ServerId',
      serverPort: 'ServerPort',
      serverIp: 'ServerIp',
      OSDList: 'OSDList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioEnable: 'boolean',
      audioFormat: 'string',
      bitRate: 'string',
      code: 'string',
      deviceAddress: 'string',
      deviceName: 'string',
      encodeFormat: 'string',
      frameRate: 'string',
      govLength: 'number',
      latitude: 'string',
      longitude: 'string',
      message: 'string',
      OSDTimeEnable: 'string',
      OSDTimeType: 'string',
      OSDTimeX: 'string',
      OSDTimeY: 'string',
      requestId: 'string',
      resolution: 'string',
      retryInterval: 'string',
      deviceId: 'string',
      userName: 'string',
      passWord: 'string',
      protocol: 'string',
      serverId: 'string',
      serverPort: 'string',
      serverIp: 'string',
      OSDList: { 'type': 'array', 'itemType': GetDeviceConfigResponseOSDList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceTimeRequest extends $tea.Model {
  deviceSn: string;
  deviceTimeStamp: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncDeviceTimeResponse extends $tea.Model {
  code: string;
  message: string;
  NTPServer: string;
  requestId: string;
  retryInterval: string;
  syncInterval: string;
  timeStamp: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      NTPServer: 'NTPServer',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
      syncInterval: 'SyncInterval',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      NTPServer: 'string',
      requestId: 'string',
      retryInterval: 'string',
      syncInterval: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceRequest extends $tea.Model {
  deviceSn: string;
  deviceId?: string;
  serverId?: string;
  deviceTimeStamp: string;
  static names(): { [key: string]: string } {
    return {
      deviceSn: 'DeviceSn',
      deviceId: 'DeviceId',
      serverId: 'ServerId',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceSn: 'string',
      deviceId: 'string',
      serverId: 'string',
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDeviceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  retryInterval: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      retryInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityRequest extends $tea.Model {
  longitude?: string;
  latitude?: string;
  audioFormat?: string;
  presetNum?: string;
  PTZCapacity?: string;
  deviceSn: string;
  streamCapacities: ReportDeviceCapacityRequestStreamCapacities[];
  deviceTimeStamp: string;
  static names(): { [key: string]: string } {
    return {
      longitude: 'Longitude',
      latitude: 'Latitude',
      audioFormat: 'AudioFormat',
      presetNum: 'PresetNum',
      PTZCapacity: 'PTZCapacity',
      deviceSn: 'DeviceSn',
      streamCapacities: 'StreamCapacities',
      deviceTimeStamp: 'DeviceTimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longitude: 'string',
      latitude: 'string',
      audioFormat: 'string',
      presetNum: 'string',
      PTZCapacity: 'string',
      deviceSn: 'string',
      streamCapacities: { 'type': 'array', 'itemType': ReportDeviceCapacityRequestStreamCapacities },
      deviceTimeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  retryInterval: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      retryInterval: 'RetryInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      retryInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVideoSummaryTaskVideoRequest extends $tea.Model {
  corpId: string;
  taskId: number;
  saveVideo: boolean;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      saveVideo: 'SaveVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'number',
      saveVideo: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveVideoSummaryTaskVideoResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsRequest extends $tea.Model {
  corpId: string;
  algorithmType: string;
  dataSourceId?: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  capStyle?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      capStyle: 'CapStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      capStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListBodyAlgorithmResultsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListBodyAlgorithmResultsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceRequest extends $tea.Model {
  corpId: string;
  dataSourceName: string;
  dataSourceType: string;
  description?: string;
  fileRetentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      fileRetentionDays: 'FileRetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      description: 'string',
      fileRetentionDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponse extends $tea.Model {
  code: string;
  message: string;
  data: AddDataSourceResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      data: AddDataSourceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoComposeResultRequest extends $tea.Model {
  corpId: string;
  taskRequestId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskRequestId: 'TaskRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskRequestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoComposeResultResponse extends $tea.Model {
  message: string;
  requestId: string;
  videoUrl: string;
  code: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      videoUrl: 'VideoUrl',
      code: 'Code',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      videoUrl: 'string',
      code: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoComposeTaskRequest extends $tea.Model {
  corpId: string;
  bucketName: string;
  domainName?: string;
  imageFileNames: string;
  audioFileName: string;
  imageParameters: string;
  videoFormat?: string;
  videoFrameRate?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      bucketName: 'BucketName',
      domainName: 'DomainName',
      imageFileNames: 'ImageFileNames',
      audioFileName: 'AudioFileName',
      imageParameters: 'ImageParameters',
      videoFormat: 'VideoFormat',
      videoFrameRate: 'VideoFrameRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      bucketName: 'string',
      domainName: 'string',
      imageFileNames: 'string',
      audioFileName: 'string',
      imageParameters: 'string',
      videoFormat: 'string',
      videoFrameRate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoComposeTaskResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  domainName: string;
  bucketName: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      domainName: 'DomainName',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      domainName: 'string',
      bucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  corpId: string;
  dataSourceId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileRequest extends $tea.Model {
  fileType: string;
  MD5?: string;
  corpId: string;
  fileContent?: string;
  fileName: string;
  fileAliasName?: string;
  dataSourceId: string;
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      fileType: 'FileType',
      MD5: 'MD5',
      corpId: 'CorpId',
      fileContent: 'FileContent',
      fileName: 'FileName',
      fileAliasName: 'FileAliasName',
      dataSourceId: 'DataSourceId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileType: 'string',
      MD5: 'string',
      corpId: 'string',
      fileContent: 'string',
      fileName: 'string',
      fileAliasName: 'string',
      dataSourceId: 'string',
      filePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: UploadFileResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: UploadFileResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsRequest extends $tea.Model {
  corpId: string;
  eventType: string;
  dataSourceId?: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  extendValue?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      eventType: 'EventType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      extendValue: 'ExtendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      eventType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      extendValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  extendValue: string;
  data: ListEventAlgorithmResultsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      extendValue: 'ExtendValue',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      extendValue: 'string',
      data: ListEventAlgorithmResultsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoSummaryTaskRequest extends $tea.Model {
  corpId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVideoSummaryTaskResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummaryTaskResultRequest extends $tea.Model {
  corpId: string;
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoSummaryTaskResultResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummaryTaskRequest extends $tea.Model {
  corpId: string;
  deviceId: string;
  startTimeStamp: number;
  endTimeStamp: number;
  optionList?: string;
  liveVideoSummary?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceId: 'DeviceId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      optionList: 'OptionList',
      liveVideoSummary: 'LiveVideoSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      optionList: 'string',
      liveVideoSummary: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoSummaryTaskResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsRequest extends $tea.Model {
  corpId: string;
  algorithmType: string;
  dataSourceId?: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  plateNumber?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plateNumber: 'PlateNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      plateNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListMotorAlgorithmResultsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListMotorAlgorithmResultsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsRequest extends $tea.Model {
  corpId: string;
  algorithmType: string;
  dataSourceId?: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      dataSourceId: 'DataSourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      dataSourceId: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListFaceAlgorithmResultsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListFaceAlgorithmResultsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsRequest extends $tea.Model {
  corpId: string;
  tagCode: string;
  aggregateType: string;
  startTime: string;
  endTime: string;
  pageNumber: string;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      aggregateType: 'AggregateType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      aggregateType: 'string',
      startTime: 'string',
      endTime: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListMetricsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListMetricsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsRequest extends $tea.Model {
  corpId?: string;
  algorithmType?: string;
  attributeName?: string;
  operatorType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      algorithmType: 'AlgorithmType',
      attributeName: 'AttributeName',
      operatorType: 'OperatorType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      algorithmType: 'string',
      attributeName: 'string',
      operatorType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRecordsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityRequest extends $tea.Model {
  corpId?: string;
  picContent?: string;
  picFormat?: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      picContent: 'PicContent',
      picFormat: 'PicFormat',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      picContent: 'string',
      picFormat: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: RecognizeFaceQualityResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: RecognizeFaceQualityResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsRequest extends $tea.Model {
  corpId?: string;
  pageNo?: string;
  pageSize?: string;
  startTime?: string;
  endTime?: string;
  algorithmType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmType: 'AlgorithmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      pageNo: 'string',
      pageSize: 'string',
      startTime: 'string',
      endTime: 'string',
      algorithmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListPersonsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListPersonsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailRequest extends $tea.Model {
  corpId?: string;
  personID?: string;
  algorithmType?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      personID: 'PersonID',
      algorithmType: 'AlgorithmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      personID: 'string',
      algorithmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetPersonDetailResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetPersonDetailResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsRequest extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetFaceOptionsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetFaceOptionsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsRequest extends $tea.Model {
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetBodyOptionsResponseData[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': GetBodyOptionsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorRequest extends $tea.Model {
  taskId: string;
  algorithmVendor: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMonitorResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyRequest extends $tea.Model {
  corpId: string;
  gbId?: string;
  startTimeStamp: number;
  endTimeStamp: number;
  pageNo: number;
  pageSize: number;
  optionList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyShrinkRequest extends $tea.Model {
  corpId: string;
  gbId?: string;
  startTimeStamp: number;
  endTimeStamp: number;
  pageNo: number;
  pageSize: number;
  optionListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionListShrink: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: SearchBodyResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: SearchBodyResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorRequest extends $tea.Model {
  corpId: string;
  monitorType: string;
  description?: string;
  batchIndicator?: number;
  algorithmVendor: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      monitorType: 'MonitorType',
      description: 'Description',
      batchIndicator: 'BatchIndicator',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      monitorType: 'string',
      description: 'string',
      batchIndicator: 'number',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  data: AddMonitorResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: AddMonitorResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultRequest extends $tea.Model {
  corpId: string;
  taskId?: string;
  minRecordId?: string;
  startTime: number;
  endTime: number;
  algorithmVendor?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      minRecordId: 'MinRecordId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      algorithmVendor: 'AlgorithmVendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      minRecordId: 'string',
      startTime: 'number',
      endTime: 'number',
      algorithmVendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: GetMonitorResultResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: GetMonitorResultResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorRequest extends $tea.Model {
  corpId?: string;
  taskId: string;
  ruleName?: string;
  deviceOperateType?: string;
  deviceList?: string;
  picOperateType?: string;
  picList?: string;
  attributeOperateType?: string;
  attributeName?: string;
  attributeValueList?: string;
  description?: string;
  ruleExpression?: string;
  algorithmVendor: string;
  notifierType?: string;
  notifierUrl?: string;
  notifierAppSecret?: string;
  notifierTimeOut?: number;
  notifierExtendValues?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      taskId: 'TaskId',
      ruleName: 'RuleName',
      deviceOperateType: 'DeviceOperateType',
      deviceList: 'DeviceList',
      picOperateType: 'PicOperateType',
      picList: 'PicList',
      attributeOperateType: 'AttributeOperateType',
      attributeName: 'AttributeName',
      attributeValueList: 'AttributeValueList',
      description: 'Description',
      ruleExpression: 'RuleExpression',
      algorithmVendor: 'AlgorithmVendor',
      notifierType: 'NotifierType',
      notifierUrl: 'NotifierUrl',
      notifierAppSecret: 'NotifierAppSecret',
      notifierTimeOut: 'NotifierTimeOut',
      notifierExtendValues: 'NotifierExtendValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      taskId: 'string',
      ruleName: 'string',
      deviceOperateType: 'string',
      deviceList: 'string',
      picOperateType: 'string',
      picList: 'string',
      attributeOperateType: 'string',
      attributeName: 'string',
      attributeValueList: 'string',
      description: 'string',
      ruleExpression: 'string',
      algorithmVendor: 'string',
      notifierType: 'string',
      notifierUrl: 'string',
      notifierAppSecret: 'string',
      notifierTimeOut: 'number',
      notifierExtendValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMonitorResponse extends $tea.Model {
  code: string;
  data: string;
  message: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceVideoUrlRequest extends $tea.Model {
  corpId: string;
  gbId?: string;
  startTime?: number;
  endTime?: number;
  deviceId?: string;
  outProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      deviceId: 'DeviceId',
      outProtocol: 'OutProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTime: 'number',
      endTime: 'number',
      deviceId: 'string',
      outProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceVideoUrlResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  url: string;
  outProtocol: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
      outProtocol: 'OutProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
      outProtocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryRequest extends $tea.Model {
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponse extends $tea.Model {
  success: boolean;
  data: GetInventoryResponseData;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      data: GetInventoryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageRequest extends $tea.Model {
  corpId: string;
  picContent?: string;
  picFormat: string;
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      picContent: 'PicContent',
      picFormat: 'PicFormat',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      picContent: 'string',
      picFormat: 'string',
      picUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: RecognizeImageResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: RecognizeImageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsRequest extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  corpName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      corpName: 'CorpName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      corpName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListCorpsResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListCorpsResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCorpRequest extends $tea.Model {
  corpId?: string;
  corpName?: string;
  appName?: string;
  parentCorpId?: string;
  description?: string;
  isvSubId?: string;
  iconPath?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpName: 'CorpName',
      appName: 'AppName',
      parentCorpId: 'ParentCorpId',
      description: 'Description',
      isvSubId: 'IsvSubId',
      iconPath: 'IconPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
      appName: 'string',
      parentCorpId: 'string',
      description: 'string',
      isvSubId: 'string',
      iconPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCorpResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceRequest extends $tea.Model {
  gbId?: string;
  deviceName?: string;
  deviceType?: string;
  deviceAddress?: string;
  deviceSite?: string;
  deviceDirection?: string;
  deviceResolution?: string;
  bitRate?: string;
  corpId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      deviceAddress: 'DeviceAddress',
      deviceSite: 'DeviceSite',
      deviceDirection: 'DeviceDirection',
      deviceResolution: 'DeviceResolution',
      bitRate: 'BitRate',
      corpId: 'CorpId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      deviceAddress: 'string',
      deviceSite: 'string',
      deviceDirection: 'string',
      deviceResolution: 'string',
      bitRate: 'string',
      corpId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  deviceName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      deviceName: 'DeviceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      deviceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: ListDevicesResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: ListDevicesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceLiveUrlRequest extends $tea.Model {
  deviceId?: string;
  streamType?: number;
  outProtocol?: string;
  corpId?: string;
  gbId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      streamType: 'StreamType',
      outProtocol: 'OutProtocol',
      corpId: 'CorpId',
      gbId: 'GbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      streamType: 'number',
      outProtocol: 'string',
      corpId: 'string',
      gbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceLiveUrlResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  url: string;
  outProtocol: string;
  streamType: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      url: 'Url',
      outProtocol: 'OutProtocol',
      streamType: 'StreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      url: 'string',
      outProtocol: 'string',
      streamType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceRequest extends $tea.Model {
  corpId: string;
  gbId?: string;
  startTimeStamp: number;
  endTimeStamp: number;
  pageNo: number;
  pageSize: number;
  optionList?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionList: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceShrinkRequest extends $tea.Model {
  corpId: string;
  gbId?: string;
  startTimeStamp: number;
  endTimeStamp: number;
  pageNo: number;
  pageSize: number;
  optionListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
      startTimeStamp: 'StartTimeStamp',
      endTimeStamp: 'EndTimeStamp',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      optionListShrink: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
      startTimeStamp: 'number',
      endTimeStamp: 'number',
      pageNo: 'number',
      pageSize: 'number',
      optionListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: SearchFaceResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: SearchFaceResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceRequest extends $tea.Model {
  gbId?: string;
  deviceName?: string;
  deviceType?: string;
  deviceAddress?: string;
  deviceSite?: string;
  deviceDirection?: string;
  deviceResolution?: string;
  bitRate?: string;
  corpId?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      deviceAddress: 'DeviceAddress',
      deviceSite: 'DeviceSite',
      deviceDirection: 'DeviceDirection',
      deviceResolution: 'DeviceResolution',
      bitRate: 'BitRate',
      corpId: 'CorpId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      deviceAddress: 'string',
      deviceSite: 'string',
      deviceDirection: 'string',
      deviceResolution: 'string',
      bitRate: 'string',
      corpId: 'string',
      vendor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDeviceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpRequest extends $tea.Model {
  corpName: string;
  appName: string;
  parentCorpId?: string;
  description?: string;
  algorithmType?: string;
  isvSubId?: string;
  iconPath?: string;
  static names(): { [key: string]: string } {
    return {
      corpName: 'CorpName',
      appName: 'AppName',
      parentCorpId: 'ParentCorpId',
      description: 'Description',
      algorithmType: 'AlgorithmType',
      isvSubId: 'IsvSubId',
      iconPath: 'IconPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpName: 'string',
      appName: 'string',
      parentCorpId: 'string',
      description: 'string',
      algorithmType: 'string',
      isvSubId: 'string',
      iconPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCorpResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  corpId: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceRequest extends $tea.Model {
  corpId?: string;
  gbId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      gbId: 'GbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      gbId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeviceResponse extends $tea.Model {
  requestId: string;
  code: string;
  data: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      data: 'Data',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseDataRecords extends $tea.Model {
  taskId: string;
  status: string;
  monitorType: string;
  ruleName: string;
  algorithmVendor: string;
  createDate: string;
  modifiedDate: string;
  deviceList: string;
  attributes: string;
  ruleExpression: string;
  notifierType: string;
  notifierExtra: string;
  description: string;
  expression: string;
  imageMatch: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      status: 'Status',
      monitorType: 'MonitorType',
      ruleName: 'RuleName',
      algorithmVendor: 'AlgorithmVendor',
      createDate: 'CreateDate',
      modifiedDate: 'ModifiedDate',
      deviceList: 'DeviceList',
      attributes: 'Attributes',
      ruleExpression: 'RuleExpression',
      notifierType: 'NotifierType',
      notifierExtra: 'NotifierExtra',
      description: 'Description',
      expression: 'Expression',
      imageMatch: 'ImageMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      status: 'string',
      monitorType: 'string',
      ruleName: 'string',
      algorithmVendor: 'string',
      createDate: 'string',
      modifiedDate: 'string',
      deviceList: 'string',
      attributes: 'string',
      ruleExpression: 'string',
      notifierType: 'string',
      notifierExtra: 'string',
      description: 'string',
      expression: 'string',
      imageMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorListResponseData extends $tea.Model {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: GetMonitorListResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': GetMonitorListResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponseDataList extends $tea.Model {
  deviceGroup: string;
  deviceName: string;
  deviceCode: string;
  bitRate: string;
  codingFormat: string;
  resolvingPower: string;
  dataSourceType: string;
  regionName: string;
  regionId: string;
  installAddress: string;
  deviceSn: string;
  deviceStatus: string;
  deviceStreamStatus: string;
  deviceComputeStatus: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroup: 'DeviceGroup',
      deviceName: 'DeviceName',
      deviceCode: 'DeviceCode',
      bitRate: 'BitRate',
      codingFormat: 'CodingFormat',
      resolvingPower: 'ResolvingPower',
      dataSourceType: 'DataSourceType',
      regionName: 'RegionName',
      regionId: 'RegionId',
      installAddress: 'InstallAddress',
      deviceSn: 'DeviceSn',
      deviceStatus: 'DeviceStatus',
      deviceStreamStatus: 'DeviceStreamStatus',
      deviceComputeStatus: 'DeviceComputeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroup: 'string',
      deviceName: 'string',
      deviceCode: 'string',
      bitRate: 'string',
      codingFormat: 'string',
      resolvingPower: 'string',
      dataSourceType: 'string',
      regionName: 'string',
      regionId: 'string',
      installAddress: 'string',
      deviceSn: 'string',
      deviceStatus: 'string',
      deviceStreamStatus: 'string',
      deviceComputeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceGroupsResponseData extends $tea.Model {
  totalCount: string;
  list: ListDeviceGroupsResponseDataList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'string',
      list: { 'type': 'array', 'itemType': ListDeviceGroupsResponseDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseDataRecords extends $tea.Model {
  compareResult: string;
  deviceID: string;
  shotTime: number;
  leftTopX: number;
  leftTopY: number;
  rightBtmX: number;
  rightBtmY: number;
  score: number;
  sourceID: string;
  sourceImagePath: string;
  sourceImageUrl: string;
  targetImagePath: string;
  targetImageUrl: string;
  static names(): { [key: string]: string } {
    return {
      compareResult: 'CompareResult',
      deviceID: 'DeviceID',
      shotTime: 'ShotTime',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBtmX: 'RightBtmX',
      rightBtmY: 'RightBtmY',
      score: 'Score',
      sourceID: 'SourceID',
      sourceImagePath: 'SourceImagePath',
      sourceImageUrl: 'SourceImageUrl',
      targetImagePath: 'TargetImagePath',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareResult: 'string',
      deviceID: 'string',
      shotTime: 'number',
      leftTopX: 'number',
      leftTopY: 'number',
      rightBtmX: 'number',
      rightBtmY: 'number',
      score: 'number',
      sourceID: 'string',
      sourceImagePath: 'string',
      sourceImageUrl: 'string',
      targetImagePath: 'string',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchObjectResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: SearchObjectResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': SearchObjectResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseDataRecords extends $tea.Model {
  inProtocol: string;
  createTime: string;
  deviceAddress: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  latitude: string;
  longitude: string;
  status: string;
  vendor: string;
  corpId: string;
  static names(): { [key: string]: string } {
    return {
      inProtocol: 'InProtocol',
      createTime: 'CreateTime',
      deviceAddress: 'DeviceAddress',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      latitude: 'Latitude',
      longitude: 'Longitude',
      status: 'Status',
      vendor: 'Vendor',
      corpId: 'CorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProtocol: 'string',
      createTime: 'string',
      deviceAddress: 'string',
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      latitude: 'string',
      longitude: 'string',
      status: 'string',
      vendor: 'string',
      corpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseData extends $tea.Model {
  pageNum: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: DescribeDevicesResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': DescribeDevicesResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponseDataRecords extends $tea.Model {
  sceneType: string;
  bizId: string;
  faceUrl: string;
  gender: string;
  idNumber: string;
  isvSubId: string;
  searchMatchingRate: string;
  personId: string;
  catalogId: number;
  profileId: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      sceneType: 'SceneType',
      bizId: 'BizId',
      faceUrl: 'FaceUrl',
      gender: 'Gender',
      idNumber: 'IdNumber',
      isvSubId: 'IsvSubId',
      searchMatchingRate: 'SearchMatchingRate',
      personId: 'PersonId',
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneType: 'string',
      bizId: 'string',
      faceUrl: 'string',
      gender: 'string',
      idNumber: 'string',
      isvSubId: 'string',
      searchMatchingRate: 'string',
      personId: 'string',
      catalogId: 'number',
      profileId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileListResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  success: boolean;
  total: number;
  records: GetProfileListResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      success: 'Success',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      success: 'boolean',
      total: 'number',
      records: { 'type': 'array', 'itemType': GetProfileListResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProfileDetailResponseData extends $tea.Model {
  liveAddress: string;
  sceneType: string;
  bizId: string;
  faceUrl: string;
  gender: string;
  idNumber: string;
  isvSubId: string;
  phoneNo: string;
  plateNo: string;
  catalogId: number;
  profileId: number;
  name: string;
  personId: string;
  static names(): { [key: string]: string } {
    return {
      liveAddress: 'LiveAddress',
      sceneType: 'SceneType',
      bizId: 'BizId',
      faceUrl: 'FaceUrl',
      gender: 'Gender',
      idNumber: 'IdNumber',
      isvSubId: 'IsvSubId',
      phoneNo: 'PhoneNo',
      plateNo: 'PlateNo',
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      name: 'Name',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAddress: 'string',
      sceneType: 'string',
      bizId: 'string',
      faceUrl: 'string',
      gender: 'string',
      idNumber: 'string',
      isvSubId: 'string',
      phoneNo: 'string',
      plateNo: 'string',
      catalogId: 'number',
      profileId: 'number',
      name: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileResponseData extends $tea.Model {
  liveAddress: string;
  sceneType: string;
  bizId: string;
  faceUrl: string;
  gender: string;
  idNumber: string;
  isvSubId: string;
  phoneNo: string;
  plateNo: string;
  catalogId: number;
  profileId: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      liveAddress: 'LiveAddress',
      sceneType: 'SceneType',
      bizId: 'BizId',
      faceUrl: 'FaceUrl',
      gender: 'Gender',
      idNumber: 'IdNumber',
      isvSubId: 'IsvSubId',
      phoneNo: 'PhoneNo',
      plateNo: 'PlateNo',
      catalogId: 'CatalogId',
      profileId: 'ProfileId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveAddress: 'string',
      sceneType: 'string',
      bizId: 'string',
      faceUrl: 'string',
      gender: 'string',
      idNumber: 'string',
      isvSubId: 'string',
      phoneNo: 'string',
      plateNo: 'string',
      catalogId: 'number',
      profileId: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProfileCatalogResponseData extends $tea.Model {
  isvSubId: string;
  parentCatalogId: string;
  profileCount: number;
  catalogId: number;
  catalogName: string;
  static names(): { [key: string]: string } {
    return {
      isvSubId: 'IsvSubId',
      parentCatalogId: 'ParentCatalogId',
      profileCount: 'ProfileCount',
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvSubId: 'string',
      parentCatalogId: 'string',
      profileCount: 'number',
      catalogId: 'number',
      catalogName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddProfileCatalogResponseData extends $tea.Model {
  catalogId: number;
  catalogName: string;
  isvSubId: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'number',
      catalogName: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogListResponseData extends $tea.Model {
  isvSubId: string;
  parentCatalogId: number;
  profileCount: number;
  catalogId: number;
  catalogName: string;
  static names(): { [key: string]: string } {
    return {
      isvSubId: 'IsvSubId',
      parentCatalogId: 'ParentCatalogId',
      profileCount: 'ProfileCount',
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvSubId: 'string',
      parentCatalogId: 'number',
      profileCount: 'number',
      catalogId: 'number',
      catalogName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseData extends $tea.Model {
  creator: string;
  userGroupName: string;
  isvSubId: string;
  userGroupId: number;
  userCount: number;
  createTime: string;
  updateTime: string;
  parentUserGroupId: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      userGroupName: 'UserGroupName',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
      userCount: 'UserCount',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      userGroupName: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
      userCount: 'number',
      createTime: 'string',
      updateTime: 'string',
      parentUserGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseDataRecordsPropertyTagList extends $tea.Model {
  code: string;
  tagCodeName: string;
  tagName: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      tagCodeName: 'TagCodeName',
      tagName: 'TagName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      tagCodeName: 'string',
      tagName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseDataRecords extends $tea.Model {
  faceUrl: string;
  firstShotTime: number;
  personId: string;
  searchMatchingRate: string;
  lastShotTime: number;
  propertyTagList: GetPersonListResponseDataRecordsPropertyTagList[];
  static names(): { [key: string]: string } {
    return {
      faceUrl: 'FaceUrl',
      firstShotTime: 'FirstShotTime',
      personId: 'PersonId',
      searchMatchingRate: 'SearchMatchingRate',
      lastShotTime: 'LastShotTime',
      propertyTagList: 'PropertyTagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUrl: 'string',
      firstShotTime: 'number',
      personId: 'string',
      searchMatchingRate: 'string',
      lastShotTime: 'number',
      propertyTagList: { 'type': 'array', 'itemType': GetPersonListResponseDataRecordsPropertyTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonListResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  records: GetPersonListResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      records: { 'type': 'array', 'itemType': GetPersonListResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseDataRecords extends $tea.Model {
  userGroupId: number;
  age: string;
  attachment: string;
  bizId: string;
  faceImageUrl: string;
  gender: string;
  idNumber: string;
  userId: number;
  userName: string;
  isvSubId: string;
  matchingRate: string;
  personId: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      age: 'Age',
      attachment: 'Attachment',
      bizId: 'BizId',
      faceImageUrl: 'FaceImageUrl',
      gender: 'Gender',
      idNumber: 'IdNumber',
      userId: 'UserId',
      userName: 'UserName',
      isvSubId: 'IsvSubId',
      matchingRate: 'MatchingRate',
      personId: 'PersonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'number',
      age: 'string',
      attachment: 'string',
      bizId: 'string',
      faceImageUrl: 'string',
      gender: 'string',
      idNumber: 'string',
      userId: 'number',
      userName: 'string',
      isvSubId: 'string',
      matchingRate: 'string',
      personId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  success: number;
  total: number;
  records: ListUsersResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      success: 'Success',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      success: 'number',
      total: 'number',
      records: { 'type': 'array', 'itemType': ListUsersResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseData extends $tea.Model {
  userId: number;
  isvSubId: string;
  userName: string;
  userGroupId: number;
  idNumber: string;
  faceImageUrl: string;
  address: string;
  age: string;
  gender: string;
  plateNo: string;
  phoneNo: string;
  attachment: string;
  bizId: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      isvSubId: 'IsvSubId',
      userName: 'UserName',
      userGroupId: 'UserGroupId',
      idNumber: 'IdNumber',
      faceImageUrl: 'FaceImageUrl',
      address: 'Address',
      age: 'Age',
      gender: 'Gender',
      plateNo: 'PlateNo',
      phoneNo: 'PhoneNo',
      attachment: 'Attachment',
      bizId: 'BizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'number',
      isvSubId: 'string',
      userName: 'string',
      userGroupId: 'number',
      idNumber: 'string',
      faceImageUrl: 'string',
      address: 'string',
      age: 'string',
      gender: 'string',
      plateNo: 'string',
      phoneNo: 'string',
      attachment: 'string',
      bizId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDetailResponseData extends $tea.Model {
  address: string;
  age: string;
  attachment: string;
  bizId: string;
  faceImageUrl: string;
  gender: string;
  idNumber: string;
  phoneNo: string;
  plateNo: string;
  userGroupId: number;
  userId: number;
  userName: string;
  isvSubId: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      age: 'Age',
      attachment: 'Attachment',
      bizId: 'BizId',
      faceImageUrl: 'FaceImageUrl',
      gender: 'Gender',
      idNumber: 'IdNumber',
      phoneNo: 'PhoneNo',
      plateNo: 'PlateNo',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
      userName: 'UserName',
      isvSubId: 'IsvSubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      age: 'string',
      attachment: 'string',
      bizId: 'string',
      faceImageUrl: 'string',
      gender: 'string',
      idNumber: 'string',
      phoneNo: 'string',
      plateNo: 'string',
      userGroupId: 'number',
      userId: 'number',
      userName: 'string',
      isvSubId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseData extends $tea.Model {
  userGroupId: number;
  isvSubId: string;
  userGroupName: string;
  userCount: number;
  parentUserGroupId: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      isvSubId: 'IsvSubId',
      userGroupName: 'UserGroupName',
      userCount: 'UserCount',
      parentUserGroupId: 'ParentUserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'number',
      isvSubId: 'string',
      userGroupName: 'string',
      userCount: 'number',
      parentUserGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseData extends $tea.Model {
  userGroupName: string;
  isvSubId: string;
  userGroupId: number;
  static names(): { [key: string]: string } {
    return {
      userGroupName: 'UserGroupName',
      isvSubId: 'IsvSubId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupName: 'string',
      isvSubId: 'string',
      userGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonVisitCountResponseData extends $tea.Model {
  corpId: string;
  deviceId: string;
  groupId: string;
  personId: string;
  tagCode: string;
  tagMetrics: string;
  hourId: string;
  dayId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceId: 'DeviceId',
      groupId: 'GroupId',
      personId: 'PersonId',
      tagCode: 'TagCode',
      tagMetrics: 'TagMetrics',
      hourId: 'HourId',
      dayId: 'DayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceId: 'string',
      groupId: 'string',
      personId: 'string',
      tagCode: 'string',
      tagMetrics: 'string',
      hourId: 'string',
      dayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmDetailsResponseData extends $tea.Model {
  corpId: string;
  dataSourceId: string;
  eventType: string;
  eventValue: string;
  extendValue: string;
  extraExtendValue: string;
  faceCount: string;
  leftTopX: string;
  leftTopY: string;
  picUrlPath: string;
  pointX: string;
  pointY: string;
  recordId: string;
  rightBottomX: string;
  rightBottomY: string;
  shotTime: string;
  sourceId: string;
  targetPicUrlPath: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      eventType: 'EventType',
      eventValue: 'EventValue',
      extendValue: 'ExtendValue',
      extraExtendValue: 'ExtraExtendValue',
      faceCount: 'FaceCount',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      picUrlPath: 'PicUrlPath',
      pointX: 'PointX',
      pointY: 'PointY',
      recordId: 'RecordId',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      shotTime: 'ShotTime',
      sourceId: 'SourceId',
      targetPicUrlPath: 'TargetPicUrlPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      eventType: 'string',
      eventValue: 'string',
      extendValue: 'string',
      extraExtendValue: 'string',
      faceCount: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      picUrlPath: 'string',
      pointX: 'string',
      pointY: 'string',
      recordId: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
      shotTime: 'string',
      sourceId: 'string',
      targetPicUrlPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpMetricsResponseData extends $tea.Model {
  corpId: string;
  tagCode: string;
  tagMetrics: string;
  tagValue: string;
  deviceGroupId: string;
  deviceId: string;
  userGroupId: string;
  personId: string;
  dateId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      tagCode: 'TagCode',
      tagMetrics: 'TagMetrics',
      tagValue: 'TagValue',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
      userGroupId: 'UserGroupId',
      personId: 'PersonId',
      dateId: 'DateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      tagCode: 'string',
      tagMetrics: 'string',
      tagValue: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
      userGroupId: 'string',
      personId: 'string',
      dateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonTraceResponseData extends $tea.Model {
  date: string;
  lastTime: string;
  startTime: string;
  endSourceImage: string;
  deviceId: string;
  startTargetImage: string;
  groupId: string;
  personId: string;
  startSourceImage: string;
  corpId: string;
  endTargetImage: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      lastTime: 'LastTime',
      startTime: 'StartTime',
      endSourceImage: 'EndSourceImage',
      deviceId: 'DeviceId',
      startTargetImage: 'StartTargetImage',
      groupId: 'GroupId',
      personId: 'PersonId',
      startSourceImage: 'StartSourceImage',
      corpId: 'CorpId',
      endTargetImage: 'EndTargetImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      lastTime: 'string',
      startTime: 'string',
      endSourceImage: 'string',
      deviceId: 'string',
      startTargetImage: 'string',
      groupId: 'string',
      personId: 'string',
      startSourceImage: 'string',
      corpId: 'string',
      endTargetImage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupMetricsResponseData extends $tea.Model {
  dateId: string;
  tagMetrics: string;
  tagCode: string;
  tagValue: string;
  corpGroupId: string;
  corpId: string;
  deviceGroupId: string;
  deviceId: string;
  userGroupId: string;
  personID: string;
  static names(): { [key: string]: string } {
    return {
      dateId: 'DateId',
      tagMetrics: 'TagMetrics',
      tagCode: 'TagCode',
      tagValue: 'TagValue',
      corpGroupId: 'CorpGroupId',
      corpId: 'CorpId',
      deviceGroupId: 'DeviceGroupId',
      deviceId: 'DeviceId',
      userGroupId: 'UserGroupId',
      personID: 'PersonID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateId: 'string',
      tagMetrics: 'string',
      tagCode: 'string',
      tagValue: 'string',
      corpGroupId: 'string',
      corpId: 'string',
      deviceGroupId: 'string',
      deviceId: 'string',
      userGroupId: 'string',
      personID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponseDataRecords extends $tea.Model {
  mustacheStyle: string;
  faceStyle: string;
  capStyle: number;
  skinColor: number;
  rightBottomY: number;
  rightBottomX: number;
  hairStyle: number;
  genderCode: number;
  respiratorColor: number;
  ethicCode: number;
  ageLowerLimit: number;
  leftTopY: number;
  leftTopX: number;
  hairColor: number;
  ageUpLimit: number;
  glassStyle: number;
  glassColor: number;
  capColor: number;
  capColorReliability: string;
  respiratorColorReliability: string;
  ethicCodeReliability: string;
  genderCodeReliability: string;
  glassColorReliability: string;
  skinColorReliability: string;
  mustacheStyleReliability: string;
  capStyleReliability: string;
  faceStyleReliability: string;
  glassStyleReliability: string;
  ageUpLimitReliability: string;
  hairStyleReliability: string;
  ageLowerLimitReliability: string;
  hairColorReliability: string;
  featureData: number[];
  static names(): { [key: string]: string } {
    return {
      mustacheStyle: 'MustacheStyle',
      faceStyle: 'FaceStyle',
      capStyle: 'CapStyle',
      skinColor: 'SkinColor',
      rightBottomY: 'RightBottomY',
      rightBottomX: 'RightBottomX',
      hairStyle: 'HairStyle',
      genderCode: 'GenderCode',
      respiratorColor: 'RespiratorColor',
      ethicCode: 'EthicCode',
      ageLowerLimit: 'AgeLowerLimit',
      leftTopY: 'LeftTopY',
      leftTopX: 'LeftTopX',
      hairColor: 'HairColor',
      ageUpLimit: 'AgeUpLimit',
      glassStyle: 'GlassStyle',
      glassColor: 'GlassColor',
      capColor: 'CapColor',
      capColorReliability: 'CapColorReliability',
      respiratorColorReliability: 'RespiratorColorReliability',
      ethicCodeReliability: 'EthicCodeReliability',
      genderCodeReliability: 'GenderCodeReliability',
      glassColorReliability: 'GlassColorReliability',
      skinColorReliability: 'SkinColorReliability',
      mustacheStyleReliability: 'MustacheStyleReliability',
      capStyleReliability: 'CapStyleReliability',
      faceStyleReliability: 'FaceStyleReliability',
      glassStyleReliability: 'GlassStyleReliability',
      ageUpLimitReliability: 'AgeUpLimitReliability',
      hairStyleReliability: 'HairStyleReliability',
      ageLowerLimitReliability: 'AgeLowerLimitReliability',
      hairColorReliability: 'HairColorReliability',
      featureData: 'FeatureData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mustacheStyle: 'string',
      faceStyle: 'string',
      capStyle: 'number',
      skinColor: 'number',
      rightBottomY: 'number',
      rightBottomX: 'number',
      hairStyle: 'number',
      genderCode: 'number',
      respiratorColor: 'number',
      ethicCode: 'number',
      ageLowerLimit: 'number',
      leftTopY: 'number',
      leftTopX: 'number',
      hairColor: 'number',
      ageUpLimit: 'number',
      glassStyle: 'number',
      glassColor: 'number',
      capColor: 'number',
      capColorReliability: 'string',
      respiratorColorReliability: 'string',
      ethicCodeReliability: 'string',
      genderCodeReliability: 'string',
      glassColorReliability: 'string',
      skinColorReliability: 'string',
      mustacheStyleReliability: 'string',
      capStyleReliability: 'string',
      faceStyleReliability: 'string',
      glassStyleReliability: 'string',
      ageUpLimitReliability: 'string',
      hairStyleReliability: 'string',
      ageLowerLimitReliability: 'string',
      hairColorReliability: 'string',
      featureData: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceModelResultResponseData extends $tea.Model {
  records: GetFaceModelResultResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetFaceModelResultResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpGroupsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeMotorModelResponseData extends $tea.Model {
  structList: string;
  static names(): { [key: string]: string } {
    return {
      structList: 'StructList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      structList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceConfigResponseOSDList extends $tea.Model {
  text: string;
  leftTopX: string;
  leftTopY: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReportDeviceCapacityRequestStreamCapacities extends $tea.Model {
  encodeFormat: string;
  resolution: string;
  maxFrameRate: string;
  maxStream: string;
  bitrateRange: string;
  govLengthRange: string;
  static names(): { [key: string]: string } {
    return {
      encodeFormat: 'EncodeFormat',
      resolution: 'Resolution',
      maxFrameRate: 'MaxFrameRate',
      maxStream: 'MaxStream',
      bitrateRange: 'BitrateRange',
      govLengthRange: 'GovLengthRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeFormat: 'string',
      resolution: 'string',
      maxFrameRate: 'string',
      maxStream: 'string',
      bitrateRange: 'string',
      govLengthRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponseDataRecords extends $tea.Model {
  capStyle: string;
  corpId: string;
  dataSourceId: string;
  personId: string;
  genderCode: string;
  hairStyle: string;
  leftTopX: number;
  leftTopY: number;
  maxAge: string;
  minAge: string;
  picUrlPath: string;
  rightBottomX: number;
  rightBottomY: number;
  shotTime: string;
  targetPicUrlPath: string;
  coatLength: string;
  coatStyle: string;
  trousersLength: string;
  trousersStyle: string;
  coatColor: string;
  trousersColor: string;
  sourceId: string;
  static names(): { [key: string]: string } {
    return {
      capStyle: 'CapStyle',
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      personId: 'PersonId',
      genderCode: 'GenderCode',
      hairStyle: 'HairStyle',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      maxAge: 'MaxAge',
      minAge: 'MinAge',
      picUrlPath: 'PicUrlPath',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      shotTime: 'ShotTime',
      targetPicUrlPath: 'TargetPicUrlPath',
      coatLength: 'CoatLength',
      coatStyle: 'CoatStyle',
      trousersLength: 'TrousersLength',
      trousersStyle: 'TrousersStyle',
      coatColor: 'CoatColor',
      trousersColor: 'TrousersColor',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capStyle: 'string',
      corpId: 'string',
      dataSourceId: 'string',
      personId: 'string',
      genderCode: 'string',
      hairStyle: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      maxAge: 'string',
      minAge: 'string',
      picUrlPath: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      shotTime: 'string',
      targetPicUrlPath: 'string',
      coatLength: 'string',
      coatStyle: 'string',
      trousersLength: 'string',
      trousersStyle: 'string',
      coatColor: 'string',
      trousersColor: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBodyAlgorithmResultsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListBodyAlgorithmResultsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListBodyAlgorithmResultsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDataSourceResponseData extends $tea.Model {
  dataSourceId: string;
  kafkaTopic: string;
  ossPath: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      kafkaTopic: 'KafkaTopic',
      ossPath: 'OssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      kafkaTopic: 'string',
      ossPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseDataRecords extends $tea.Model {
  ossPath: string;
  sourceId: string;
  static names(): { [key: string]: string } {
    return {
      ossPath: 'OssPath',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossPath: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadFileResponseData extends $tea.Model {
  records: UploadFileResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': UploadFileResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponseDataRecords extends $tea.Model {
  capStyle: string;
  corpId: string;
  dataSourceId: string;
  eventType: string;
  faceCount: string;
  picUrlPath: string;
  shotTime: string;
  targetPicUrlPath: string;
  recordId: string;
  extendValue: string;
  extendValueTwo: string;
  extendValueThree: string;
  static names(): { [key: string]: string } {
    return {
      capStyle: 'CapStyle',
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      eventType: 'EventType',
      faceCount: 'FaceCount',
      picUrlPath: 'PicUrlPath',
      shotTime: 'ShotTime',
      targetPicUrlPath: 'TargetPicUrlPath',
      recordId: 'RecordId',
      extendValue: 'ExtendValue',
      extendValueTwo: 'ExtendValueTwo',
      extendValueThree: 'ExtendValueThree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capStyle: 'string',
      corpId: 'string',
      dataSourceId: 'string',
      eventType: 'string',
      faceCount: 'string',
      picUrlPath: 'string',
      shotTime: 'string',
      targetPicUrlPath: 'string',
      recordId: 'string',
      extendValue: 'string',
      extendValueTwo: 'string',
      extendValueThree: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventAlgorithmResultsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListEventAlgorithmResultsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListEventAlgorithmResultsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponseDataRecords extends $tea.Model {
  corpId: string;
  dataSourceId: string;
  leftTopX: number;
  leftTopY: number;
  motorId: string;
  picUrlPath: string;
  plateNumber: string;
  rightBottomX: number;
  rightBottomY: number;
  shotTime: string;
  targetPicUrlPath: string;
  motorStyle: string;
  motorModel: string;
  motorColor: string;
  motorClass: string;
  motorBrand: string;
  plateColor: string;
  plateClass: string;
  safetyBelt: string;
  calling: string;
  sourceId: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      motorId: 'MotorId',
      picUrlPath: 'PicUrlPath',
      plateNumber: 'PlateNumber',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      shotTime: 'ShotTime',
      targetPicUrlPath: 'TargetPicUrlPath',
      motorStyle: 'MotorStyle',
      motorModel: 'MotorModel',
      motorColor: 'MotorColor',
      motorClass: 'MotorClass',
      motorBrand: 'MotorBrand',
      plateColor: 'PlateColor',
      plateClass: 'PlateClass',
      safetyBelt: 'SafetyBelt',
      calling: 'Calling',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      dataSourceId: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      motorId: 'string',
      picUrlPath: 'string',
      plateNumber: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      shotTime: 'string',
      targetPicUrlPath: 'string',
      motorStyle: 'string',
      motorModel: 'string',
      motorColor: 'string',
      motorClass: 'string',
      motorBrand: 'string',
      plateColor: 'string',
      plateClass: 'string',
      safetyBelt: 'string',
      calling: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMotorAlgorithmResultsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListMotorAlgorithmResultsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListMotorAlgorithmResultsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponseDataRecords extends $tea.Model {
  faceId: string;
  corpId: string;
  dataSourceId: string;
  shotTime: string;
  genderCode: string;
  minAge: string;
  maxAge: string;
  capStyle: string;
  hairStyle: string;
  leftTopX: number;
  leftTopY: number;
  rightBottomX: number;
  rightBottomY: number;
  picUrlPath: string;
  targetPicUrlPath: string;
  sourceId: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      corpId: 'CorpId',
      dataSourceId: 'DataSourceId',
      shotTime: 'ShotTime',
      genderCode: 'GenderCode',
      minAge: 'MinAge',
      maxAge: 'MaxAge',
      capStyle: 'CapStyle',
      hairStyle: 'HairStyle',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      picUrlPath: 'PicUrlPath',
      targetPicUrlPath: 'TargetPicUrlPath',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      corpId: 'string',
      dataSourceId: 'string',
      shotTime: 'string',
      genderCode: 'string',
      minAge: 'string',
      maxAge: 'string',
      capStyle: 'string',
      hairStyle: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      rightBottomX: 'number',
      rightBottomY: 'number',
      picUrlPath: 'string',
      targetPicUrlPath: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFaceAlgorithmResultsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListFaceAlgorithmResultsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListFaceAlgorithmResultsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseDataRecords extends $tea.Model {
  dateTime: string;
  tagCode: string;
  tagValue: string;
  tagMetric: string;
  static names(): { [key: string]: string } {
    return {
      dateTime: 'DateTime',
      tagCode: 'TagCode',
      tagValue: 'TagValue',
      tagMetric: 'TagMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateTime: 'string',
      tagCode: 'string',
      tagValue: 'string',
      tagMetric: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetricsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListMetricsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListMetricsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponseDataAttributes extends $tea.Model {
  leftTopX: number;
  leftTopY: number;
  rightBottomX: number;
  rightBottomY: number;
  targetImageStoragePath: string;
  faceStyle: string;
  faceQuality: string;
  faceScore: string;
  static names(): { [key: string]: string } {
    return {
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      targetImageStoragePath: 'TargetImageStoragePath',
      faceStyle: 'FaceStyle',
      faceQuality: 'FaceQuality',
      faceScore: 'FaceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftTopX: 'number',
      leftTopY: 'number',
      rightBottomX: 'number',
      rightBottomY: 'number',
      targetImageStoragePath: 'string',
      faceStyle: 'string',
      faceQuality: 'string',
      faceScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeFaceQualityResponseData extends $tea.Model {
  qualityScore: string;
  description: string;
  attributes: RecognizeFaceQualityResponseDataAttributes;
  static names(): { [key: string]: string } {
    return {
      qualityScore: 'QualityScore',
      description: 'Description',
      attributes: 'Attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityScore: 'string',
      description: 'string',
      attributes: RecognizeFaceQualityResponseDataAttributes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseDataRecordsTagList extends $tea.Model {
  tagCode: string;
  tagName: string;
  tagValue: string;
  tagValueId: string;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'TagCode',
      tagName: 'TagName',
      tagValue: 'TagValue',
      tagValueId: 'TagValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagName: 'string',
      tagValue: 'string',
      tagValueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseDataRecords extends $tea.Model {
  firstAppearTime: string;
  personId: string;
  picUrl: string;
  tagList: ListPersonsResponseDataRecordsTagList[];
  static names(): { [key: string]: string } {
    return {
      firstAppearTime: 'FirstAppearTime',
      personId: 'PersonId',
      picUrl: 'PicUrl',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstAppearTime: 'string',
      personId: 'string',
      picUrl: 'string',
      tagList: { 'type': 'array', 'itemType': ListPersonsResponseDataRecordsTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPersonsResponseData extends $tea.Model {
  pageNo: string;
  pageSize: string;
  totalCount: string;
  totalPage: string;
  records: ListPersonsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'string',
      pageSize: 'string',
      totalCount: 'string',
      totalPage: 'string',
      records: { 'type': 'array', 'itemType': ListPersonsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponseDataTagList extends $tea.Model {
  tagCode: string;
  tagName: string;
  tagValue: string;
  tagValueId: string;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'TagCode',
      tagName: 'TagName',
      tagValue: 'TagValue',
      tagValueId: 'TagValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagName: 'string',
      tagValue: 'string',
      tagValueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonDetailResponseData extends $tea.Model {
  picUrl: string;
  personId: string;
  tagList: GetPersonDetailResponseDataTagList[];
  static names(): { [key: string]: string } {
    return {
      picUrl: 'PicUrl',
      personId: 'PersonId',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      picUrl: 'string',
      personId: 'string',
      tagList: { 'type': 'array', 'itemType': GetPersonDetailResponseDataTagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponseDataOptionList extends $tea.Model {
  key: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFaceOptionsResponseData extends $tea.Model {
  key: string;
  name: string;
  optionList: GetFaceOptionsResponseDataOptionList[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      optionList: { 'type': 'array', 'itemType': GetFaceOptionsResponseDataOptionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponseDataOptionList extends $tea.Model {
  key: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBodyOptionsResponseData extends $tea.Model {
  key: string;
  name: string;
  optionList: GetBodyOptionsResponseDataOptionList[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      optionList: 'OptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      optionList: { 'type': 'array', 'itemType': GetBodyOptionsResponseDataOptionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponseDataRecords extends $tea.Model {
  gbId: string;
  imageUrl: string;
  leftTopX: number;
  leftTopY: number;
  rightBottomX: number;
  rightBottomY: number;
  score: number;
  targetImageUrl: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      imageUrl: 'ImageUrl',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      targetImageUrl: 'TargetImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      imageUrl: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      targetImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchBodyResponseData extends $tea.Model {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: SearchBodyResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': SearchBodyResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMonitorResponseData extends $tea.Model {
  taskId: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseDataRecordsExtendInfo extends $tea.Model {
  plateNo: string;
  static names(): { [key: string]: string } {
    return {
      plateNo: 'PlateNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plateNo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseDataRecords extends $tea.Model {
  rightBottomY: string;
  rightBottomX: string;
  leftUpY: string;
  leftUpX: string;
  gbId: string;
  score: string;
  picUrl: string;
  shotTime: string;
  monitorPicUrl: string;
  targetPicUrl: string;
  taskId: string;
  extendInfo: GetMonitorResultResponseDataRecordsExtendInfo;
  static names(): { [key: string]: string } {
    return {
      rightBottomY: 'RightBottomY',
      rightBottomX: 'RightBottomX',
      leftUpY: 'LeftUpY',
      leftUpX: 'LeftUpX',
      gbId: 'GbId',
      score: 'Score',
      picUrl: 'PicUrl',
      shotTime: 'ShotTime',
      monitorPicUrl: 'MonitorPicUrl',
      targetPicUrl: 'TargetPicUrl',
      taskId: 'TaskId',
      extendInfo: 'ExtendInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rightBottomY: 'string',
      rightBottomX: 'string',
      leftUpY: 'string',
      leftUpX: 'string',
      gbId: 'string',
      score: 'string',
      picUrl: 'string',
      shotTime: 'string',
      monitorPicUrl: 'string',
      targetPicUrl: 'string',
      taskId: 'string',
      extendInfo: GetMonitorResultResponseDataRecordsExtendInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonitorResultResponseData extends $tea.Model {
  maxId: string;
  records: GetMonitorResultResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      maxId: 'MaxId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxId: 'string',
      records: { 'type': 'array', 'itemType': GetMonitorResultResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponseDataResultObject extends $tea.Model {
  buyerId: string;
  commodityCode: string;
  currentInventory: string;
  validEndTime: string;
  validStartTime: string;
  instanceId: string;
  inventoryId: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      commodityCode: 'CommodityCode',
      currentInventory: 'CurrentInventory',
      validEndTime: 'ValidEndTime',
      validStartTime: 'ValidStartTime',
      instanceId: 'InstanceId',
      inventoryId: 'InventoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'string',
      commodityCode: 'string',
      currentInventory: 'string',
      validEndTime: 'string',
      validStartTime: 'string',
      instanceId: 'string',
      inventoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventoryResponseData extends $tea.Model {
  resultObject: GetInventoryResponseDataResultObject[];
  static names(): { [key: string]: string } {
    return {
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultObject: { 'type': 'array', 'itemType': GetInventoryResponseDataResultObject },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseDataBodyList extends $tea.Model {
  feature: string;
  fileName: string;
  imageBaseSixFour: string;
  leftTopX: string;
  leftTopY: string;
  localFeature: string;
  respiratorColor: string;
  rightBottomX: string;
  rightBottomY: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      fileName: 'FileName',
      imageBaseSixFour: 'ImageBaseSixFour',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      localFeature: 'LocalFeature',
      respiratorColor: 'RespiratorColor',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      fileName: 'string',
      imageBaseSixFour: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      localFeature: 'string',
      respiratorColor: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseDataFaceList extends $tea.Model {
  feature: string;
  fileName: string;
  imageBaseSixFour: string;
  leftTopX: string;
  leftTopY: string;
  localFeature: string;
  respiratorColor: string;
  rightBottomX: string;
  rightBottomY: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      fileName: 'FileName',
      imageBaseSixFour: 'ImageBaseSixFour',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      localFeature: 'LocalFeature',
      respiratorColor: 'RespiratorColor',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      fileName: 'string',
      imageBaseSixFour: 'string',
      leftTopX: 'string',
      leftTopY: 'string',
      localFeature: 'string',
      respiratorColor: 'string',
      rightBottomX: 'string',
      rightBottomY: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeImageResponseData extends $tea.Model {
  bodyList: RecognizeImageResponseDataBodyList[];
  faceList: RecognizeImageResponseDataFaceList[];
  static names(): { [key: string]: string } {
    return {
      bodyList: 'BodyList',
      faceList: 'FaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyList: { 'type': 'array', 'itemType': RecognizeImageResponseDataBodyList },
      faceList: { 'type': 'array', 'itemType': RecognizeImageResponseDataFaceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponseDataRecords extends $tea.Model {
  corpId: string;
  corpName: string;
  description: string;
  createDate: string;
  parentCorpId: string;
  appName: string;
  deviceCount: number;
  isvSubId: string;
  acuUsed: number;
  iconPath: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      corpName: 'CorpName',
      description: 'Description',
      createDate: 'CreateDate',
      parentCorpId: 'ParentCorpId',
      appName: 'AppName',
      deviceCount: 'DeviceCount',
      isvSubId: 'IsvSubId',
      acuUsed: 'AcuUsed',
      iconPath: 'IconPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
      description: 'string',
      createDate: 'string',
      parentCorpId: 'string',
      appName: 'string',
      deviceCount: 'number',
      isvSubId: 'string',
      acuUsed: 'number',
      iconPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCorpsResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListCorpsResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListCorpsResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseDataRecords extends $tea.Model {
  accessProtocolType: string;
  bitRate: string;
  coverImageUrl: string;
  gbId: string;
  deviceAddress: string;
  deviceDirection: string;
  deviceSite: string;
  latitude: string;
  longitude: string;
  deviceName: string;
  resolution: string;
  sipGBId: string;
  sipPassword: string;
  sipServerIp: string;
  sipServerPort: string;
  status: number;
  deviceType: string;
  vendor: string;
  createTime: string;
  static names(): { [key: string]: string } {
    return {
      accessProtocolType: 'AccessProtocolType',
      bitRate: 'BitRate',
      coverImageUrl: 'CoverImageUrl',
      gbId: 'GbId',
      deviceAddress: 'DeviceAddress',
      deviceDirection: 'DeviceDirection',
      deviceSite: 'DeviceSite',
      latitude: 'Latitude',
      longitude: 'Longitude',
      deviceName: 'DeviceName',
      resolution: 'Resolution',
      sipGBId: 'SipGBId',
      sipPassword: 'SipPassword',
      sipServerIp: 'SipServerIp',
      sipServerPort: 'SipServerPort',
      status: 'Status',
      deviceType: 'DeviceType',
      vendor: 'Vendor',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProtocolType: 'string',
      bitRate: 'string',
      coverImageUrl: 'string',
      gbId: 'string',
      deviceAddress: 'string',
      deviceDirection: 'string',
      deviceSite: 'string',
      latitude: 'string',
      longitude: 'string',
      deviceName: 'string',
      resolution: 'string',
      sipGBId: 'string',
      sipPassword: 'string',
      sipServerIp: 'string',
      sipServerPort: 'string',
      status: 'number',
      deviceType: 'string',
      vendor: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDevicesResponseData extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: ListDevicesResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': ListDevicesResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseDataRecords extends $tea.Model {
  gbId: string;
  imageUrl: string;
  leftTopX: number;
  leftTopY: number;
  matchSuggestion: string;
  rightBottomX: number;
  rightBottomY: number;
  score: number;
  targetImageUrl: string;
  sourceId: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      imageUrl: 'ImageUrl',
      leftTopX: 'LeftTopX',
      leftTopY: 'LeftTopY',
      matchSuggestion: 'MatchSuggestion',
      rightBottomX: 'RightBottomX',
      rightBottomY: 'RightBottomY',
      score: 'Score',
      targetImageUrl: 'TargetImageUrl',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      imageUrl: 'string',
      leftTopX: 'number',
      leftTopY: 'number',
      matchSuggestion: 'string',
      rightBottomX: 'number',
      rightBottomY: 'number',
      score: 'number',
      targetImageUrl: 'string',
      sourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchFaceResponseData extends $tea.Model {
  pageNo: number;
  pageSize: number;
  totalCount: number;
  totalPage: number;
  records: SearchFaceResponseDataRecords[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
      records: { 'type': 'array', 'itemType': SearchFaceResponseDataRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("vcs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getMonitorListWithOptions(request: GetMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMonitorListResponse>(await this.doRequest("GetMonitorList", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetMonitorListResponse({}));
  }

  async getMonitorList(request: GetMonitorListRequest): Promise<GetMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorListWithOptions(request, runtime);
  }

  async listDeviceGroupsWithOptions(request: ListDeviceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeviceGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDeviceGroupsResponse>(await this.doRequest("ListDeviceGroups", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListDeviceGroupsResponse({}));
  }

  async listDeviceGroups(request: ListDeviceGroupsRequest): Promise<ListDeviceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeviceGroupsWithOptions(request, runtime);
  }

  async searchObjectWithOptions(tmp: SearchObjectRequest, runtime: $Util.RuntimeOptions): Promise<SearchObjectResponse> {
    Util.validateModel(tmp);
    let request = new SearchObjectShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.deviceList)) {
      request.deviceListShrink = Util.toJSONString(tmp.deviceList);
    }

    if (!Util.isUnset(tmp.conditions)) {
      request.conditionsShrink = Util.toJSONString(tmp.conditions);
    }

    if (!Util.isUnset(tmp.imagePath)) {
      request.imagePathShrink = Util.toJSONString(tmp.imagePath);
    }

    return $tea.cast<SearchObjectResponse>(await this.doRequest("SearchObject", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new SearchObjectResponse({}));
  }

  async searchObject(request: SearchObjectRequest): Promise<SearchObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchObjectWithOptions(request, runtime);
  }

  async describeDevicesWithOptions(request: DescribeDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDevicesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDevicesResponse>(await this.doRequest("DescribeDevices", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DescribeDevicesResponse({}));
  }

  async describeDevices(request: DescribeDevicesRequest): Promise<DescribeDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDevicesWithOptions(request, runtime);
  }

  async getProfileListWithOptions(tmp: GetProfileListRequest, runtime: $Util.RuntimeOptions): Promise<GetProfileListResponse> {
    Util.validateModel(tmp);
    let request = new GetProfileListShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.personIdList)) {
      request.personIdListShrink = Util.toJSONString(tmp.personIdList);
    }

    if (!Util.isUnset(tmp.profileIdList)) {
      request.profileIdListShrink = Util.toJSONString(tmp.profileIdList);
    }

    return $tea.cast<GetProfileListResponse>(await this.doRequest("GetProfileList", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetProfileListResponse({}));
  }

  async getProfileList(request: GetProfileListRequest): Promise<GetProfileListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProfileListWithOptions(request, runtime);
  }

  async getProfileDetailWithOptions(request: GetProfileDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetProfileDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetProfileDetailResponse>(await this.doRequest("GetProfileDetail", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetProfileDetailResponse({}));
  }

  async getProfileDetail(request: GetProfileDetailRequest): Promise<GetProfileDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProfileDetailWithOptions(request, runtime);
  }

  async deleteProfileCatalogWithOptions(request: DeleteProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProfileCatalogResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProfileCatalogResponse>(await this.doRequest("DeleteProfileCatalog", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteProfileCatalogResponse({}));
  }

  async deleteProfileCatalog(request: DeleteProfileCatalogRequest): Promise<DeleteProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProfileCatalogWithOptions(request, runtime);
  }

  async bindPersonWithOptions(request: BindPersonRequest, runtime: $Util.RuntimeOptions): Promise<BindPersonResponse> {
    Util.validateModel(request);
    return $tea.cast<BindPersonResponse>(await this.doRequest("BindPerson", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new BindPersonResponse({}));
  }

  async bindPerson(request: BindPersonRequest): Promise<BindPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPersonWithOptions(request, runtime);
  }

  async updateProfileWithOptions(request: UpdateProfileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProfileResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProfileResponse>(await this.doRequest("UpdateProfile", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateProfileResponse({}));
  }

  async updateProfile(request: UpdateProfileRequest): Promise<UpdateProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProfileWithOptions(request, runtime);
  }

  async unbindPersonWithOptions(request: UnbindPersonRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPersonResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindPersonResponse>(await this.doRequest("UnbindPerson", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UnbindPersonResponse({}));
  }

  async unbindPerson(request: UnbindPersonRequest): Promise<UnbindPersonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPersonWithOptions(request, runtime);
  }

  async addProfileWithOptions(request: AddProfileRequest, runtime: $Util.RuntimeOptions): Promise<AddProfileResponse> {
    Util.validateModel(request);
    return $tea.cast<AddProfileResponse>(await this.doRequest("AddProfile", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new AddProfileResponse({}));
  }

  async addProfile(request: AddProfileRequest): Promise<AddProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProfileWithOptions(request, runtime);
  }

  async updateProfileCatalogWithOptions(request: UpdateProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProfileCatalogResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateProfileCatalogResponse>(await this.doRequest("UpdateProfileCatalog", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateProfileCatalogResponse({}));
  }

  async updateProfileCatalog(request: UpdateProfileCatalogRequest): Promise<UpdateProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProfileCatalogWithOptions(request, runtime);
  }

  async addProfileCatalogWithOptions(request: AddProfileCatalogRequest, runtime: $Util.RuntimeOptions): Promise<AddProfileCatalogResponse> {
    Util.validateModel(request);
    return $tea.cast<AddProfileCatalogResponse>(await this.doRequest("AddProfileCatalog", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new AddProfileCatalogResponse({}));
  }

  async addProfileCatalog(request: AddProfileCatalogRequest): Promise<AddProfileCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addProfileCatalogWithOptions(request, runtime);
  }

  async getCatalogListWithOptions(request: GetCatalogListRequest, runtime: $Util.RuntimeOptions): Promise<GetCatalogListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetCatalogListResponse>(await this.doRequest("GetCatalogList", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetCatalogListResponse({}));
  }

  async getCatalogList(request: GetCatalogListRequest): Promise<GetCatalogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCatalogListWithOptions(request, runtime);
  }

  async deleteProfileWithOptions(request: DeleteProfileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProfileResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteProfileResponse>(await this.doRequest("DeleteProfile", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteProfileResponse({}));
  }

  async deleteProfile(request: DeleteProfileRequest): Promise<DeleteProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProfileWithOptions(request, runtime);
  }

  async unbindCorpGroupWithOptions(request: UnbindCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<UnbindCorpGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindCorpGroupResponse>(await this.doRequest("UnbindCorpGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UnbindCorpGroupResponse({}));
  }

  async unbindCorpGroup(request: UnbindCorpGroupRequest): Promise<UnbindCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindCorpGroupWithOptions(request, runtime);
  }

  async bindCorpGroupWithOptions(request: BindCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<BindCorpGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<BindCorpGroupResponse>(await this.doRequest("BindCorpGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new BindCorpGroupResponse({}));
  }

  async bindCorpGroup(request: BindCorpGroupRequest): Promise<BindCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindCorpGroupWithOptions(request, runtime);
  }

  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListUserGroupsResponse>(await this.doRequest("ListUserGroups", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListUserGroupsResponse({}));
  }

  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  async getPersonListWithOptions(tmp: GetPersonListRequest, runtime: $Util.RuntimeOptions): Promise<GetPersonListResponse> {
    Util.validateModel(tmp);
    let request = new GetPersonListShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.corpIdList)) {
      request.corpIdListShrink = Util.toJSONString(tmp.corpIdList);
    }

    if (!Util.isUnset(tmp.personIdList)) {
      request.personIdListShrink = Util.toJSONString(tmp.personIdList);
    }

    return $tea.cast<GetPersonListResponse>(await this.doRequest("GetPersonList", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetPersonListResponse({}));
  }

  async getPersonList(request: GetPersonListRequest): Promise<GetPersonListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPersonListWithOptions(request, runtime);
  }

  async listUsersWithOptions(tmp: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(tmp);
    let request = new ListUsersShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.personList)) {
      request.personListShrink = Util.toJSONString(tmp.personList);
    }

    if (!Util.isUnset(tmp.userList)) {
      request.userListShrink = Util.toJSONString(tmp.userList);
    }

    return $tea.cast<ListUsersResponse>(await this.doRequest("ListUsers", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateUserResponse>(await this.doRequest("CreateUser", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateUserResponse({}));
  }

  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  async bindUserWithOptions(request: BindUserRequest, runtime: $Util.RuntimeOptions): Promise<BindUserResponse> {
    Util.validateModel(request);
    return $tea.cast<BindUserResponse>(await this.doRequest("BindUser", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new BindUserResponse({}));
  }

  async bindUser(request: BindUserRequest): Promise<BindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindUserWithOptions(request, runtime);
  }

  async getUserDetailWithOptions(request: GetUserDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetUserDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetUserDetailResponse>(await this.doRequest("GetUserDetail", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetUserDetailResponse({}));
  }

  async getUserDetail(request: GetUserDetailRequest): Promise<GetUserDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDetailWithOptions(request, runtime);
  }

  async uploadImageWithOptions(request: UploadImageRequest, runtime: $Util.RuntimeOptions): Promise<UploadImageResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadImageResponse>(await this.doRequest("UploadImage", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UploadImageResponse({}));
  }

  async uploadImage(request: UploadImageRequest): Promise<UploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadImageWithOptions(request, runtime);
  }

  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateUserGroupResponse>(await this.doRequest("UpdateUserGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateUserGroupResponse({}));
  }

  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateUserGroupResponse>(await this.doRequest("CreateUserGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateUserGroupResponse({}));
  }

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  async unbindUserWithOptions(request: UnbindUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindUserResponse> {
    Util.validateModel(request);
    return $tea.cast<UnbindUserResponse>(await this.doRequest("UnbindUser", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UnbindUserResponse({}));
  }

  async unbindUser(request: UnbindUserRequest): Promise<UnbindUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindUserWithOptions(request, runtime);
  }

  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateUserResponse>(await this.doRequest("UpdateUser", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateUserResponse({}));
  }

  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteUserResponse>(await this.doRequest("DeleteUser", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteUserResponse({}));
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteUserGroupResponse>(await this.doRequest("DeleteUserGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  async listPersonVisitCountWithOptions(request: ListPersonVisitCountRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonVisitCountResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPersonVisitCountResponse>(await this.doRequest("ListPersonVisitCount", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListPersonVisitCountResponse({}));
  }

  async listPersonVisitCount(request: ListPersonVisitCountRequest): Promise<ListPersonVisitCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonVisitCountWithOptions(request, runtime);
  }

  async listEventAlgorithmDetailsWithOptions(request: ListEventAlgorithmDetailsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventAlgorithmDetailsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListEventAlgorithmDetailsResponse>(await this.doRequest("ListEventAlgorithmDetails", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListEventAlgorithmDetailsResponse({}));
  }

  async listEventAlgorithmDetails(request: ListEventAlgorithmDetailsRequest): Promise<ListEventAlgorithmDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventAlgorithmDetailsWithOptions(request, runtime);
  }

  async listCorpMetricsWithOptions(request: ListCorpMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpMetricsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCorpMetricsResponse>(await this.doRequest("ListCorpMetrics", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListCorpMetricsResponse({}));
  }

  async listCorpMetrics(request: ListCorpMetricsRequest): Promise<ListCorpMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpMetricsWithOptions(request, runtime);
  }

  async listPersonTraceWithOptions(request: ListPersonTraceRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPersonTraceResponse>(await this.doRequest("ListPersonTrace", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListPersonTraceResponse({}));
  }

  async listPersonTrace(request: ListPersonTraceRequest): Promise<ListPersonTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonTraceWithOptions(request, runtime);
  }

  async listCorpGroupMetricsWithOptions(request: ListCorpGroupMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpGroupMetricsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCorpGroupMetricsResponse>(await this.doRequest("ListCorpGroupMetrics", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListCorpGroupMetricsResponse({}));
  }

  async listCorpGroupMetrics(request: ListCorpGroupMetricsRequest): Promise<ListCorpGroupMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpGroupMetricsWithOptions(request, runtime);
  }

  async getFaceModelResultWithOptions(request: GetFaceModelResultRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceModelResultResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFaceModelResultResponse>(await this.doRequest("GetFaceModelResult", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetFaceModelResultResponse({}));
  }

  async getFaceModelResult(request: GetFaceModelResultRequest): Promise<GetFaceModelResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceModelResultWithOptions(request, runtime);
  }

  async createCorpGroupWithOptions(request: CreateCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateCorpGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCorpGroupResponse>(await this.doRequest("CreateCorpGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateCorpGroupResponse({}));
  }

  async createCorpGroup(request: CreateCorpGroupRequest): Promise<CreateCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCorpGroupWithOptions(request, runtime);
  }

  async listCorpGroupsWithOptions(request: ListCorpGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCorpGroupsResponse>(await this.doRequest("ListCorpGroups", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListCorpGroupsResponse({}));
  }

  async listCorpGroups(request: ListCorpGroupsRequest): Promise<ListCorpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpGroupsWithOptions(request, runtime);
  }

  async deleteCorpGroupWithOptions(request: DeleteCorpGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCorpGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteCorpGroupResponse>(await this.doRequest("DeleteCorpGroup", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteCorpGroupResponse({}));
  }

  async deleteCorpGroup(request: DeleteCorpGroupRequest): Promise<DeleteCorpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCorpGroupWithOptions(request, runtime);
  }

  async invokeMotorModelWithOptions(request: InvokeMotorModelRequest, runtime: $Util.RuntimeOptions): Promise<InvokeMotorModelResponse> {
    Util.validateModel(request);
    return $tea.cast<InvokeMotorModelResponse>(await this.doRequest("InvokeMotorModel", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new InvokeMotorModelResponse({}));
  }

  async invokeMotorModel(request: InvokeMotorModelRequest): Promise<InvokeMotorModelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeMotorModelWithOptions(request, runtime);
  }

  async getDeviceConfigWithOptions(request: GetDeviceConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeviceConfigResponse>(await this.doRequest("GetDeviceConfig", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetDeviceConfigResponse({}));
  }

  async getDeviceConfig(request: GetDeviceConfigRequest): Promise<GetDeviceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceConfigWithOptions(request, runtime);
  }

  async syncDeviceTimeWithOptions(request: SyncDeviceTimeRequest, runtime: $Util.RuntimeOptions): Promise<SyncDeviceTimeResponse> {
    Util.validateModel(request);
    return $tea.cast<SyncDeviceTimeResponse>(await this.doRequest("SyncDeviceTime", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new SyncDeviceTimeResponse({}));
  }

  async syncDeviceTime(request: SyncDeviceTimeRequest): Promise<SyncDeviceTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncDeviceTimeWithOptions(request, runtime);
  }

  async registerDeviceWithOptions(request: RegisterDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<RegisterDeviceResponse>(await this.doRequest("RegisterDevice", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new RegisterDeviceResponse({}));
  }

  async registerDevice(request: RegisterDeviceRequest): Promise<RegisterDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDeviceWithOptions(request, runtime);
  }

  async reportDeviceCapacityWithOptions(request: ReportDeviceCapacityRequest, runtime: $Util.RuntimeOptions): Promise<ReportDeviceCapacityResponse> {
    Util.validateModel(request);
    return $tea.cast<ReportDeviceCapacityResponse>(await this.doRequest("ReportDeviceCapacity", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ReportDeviceCapacityResponse({}));
  }

  async reportDeviceCapacity(request: ReportDeviceCapacityRequest): Promise<ReportDeviceCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reportDeviceCapacityWithOptions(request, runtime);
  }

  async saveVideoSummaryTaskVideoWithOptions(request: SaveVideoSummaryTaskVideoRequest, runtime: $Util.RuntimeOptions): Promise<SaveVideoSummaryTaskVideoResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveVideoSummaryTaskVideoResponse>(await this.doRequest("SaveVideoSummaryTaskVideo", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new SaveVideoSummaryTaskVideoResponse({}));
  }

  async saveVideoSummaryTaskVideo(request: SaveVideoSummaryTaskVideoRequest): Promise<SaveVideoSummaryTaskVideoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveVideoSummaryTaskVideoWithOptions(request, runtime);
  }

  async listBodyAlgorithmResultsWithOptions(request: ListBodyAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListBodyAlgorithmResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListBodyAlgorithmResultsResponse>(await this.doRequest("ListBodyAlgorithmResults", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListBodyAlgorithmResultsResponse({}));
  }

  async listBodyAlgorithmResults(request: ListBodyAlgorithmResultsRequest): Promise<ListBodyAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBodyAlgorithmResultsWithOptions(request, runtime);
  }

  async addDataSourceWithOptions(request: AddDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<AddDataSourceResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDataSourceResponse>(await this.doRequest("AddDataSource", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new AddDataSourceResponse({}));
  }

  async addDataSource(request: AddDataSourceRequest): Promise<AddDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  async getVideoComposeResultWithOptions(request: GetVideoComposeResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoComposeResultResponse> {
    Util.validateModel(request);
    return $tea.cast<GetVideoComposeResultResponse>(await this.doRequest("GetVideoComposeResult", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetVideoComposeResultResponse({}));
  }

  async getVideoComposeResult(request: GetVideoComposeResultRequest): Promise<GetVideoComposeResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoComposeResultWithOptions(request, runtime);
  }

  async createVideoComposeTaskWithOptions(request: CreateVideoComposeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoComposeTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVideoComposeTaskResponse>(await this.doRequest("CreateVideoComposeTask", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateVideoComposeTaskResponse({}));
  }

  async createVideoComposeTask(request: CreateVideoComposeTaskRequest): Promise<CreateVideoComposeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoComposeTaskWithOptions(request, runtime);
  }

  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDataSourceResponse>(await this.doRequest("DeleteDataSource", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteDataSourceResponse({}));
  }

  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  async uploadFileWithOptions(request: UploadFileRequest, runtime: $Util.RuntimeOptions): Promise<UploadFileResponse> {
    Util.validateModel(request);
    return $tea.cast<UploadFileResponse>(await this.doRequest("UploadFile", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UploadFileResponse({}));
  }

  async uploadFile(request: UploadFileRequest): Promise<UploadFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  async listEventAlgorithmResultsWithOptions(request: ListEventAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventAlgorithmResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListEventAlgorithmResultsResponse>(await this.doRequest("ListEventAlgorithmResults", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListEventAlgorithmResultsResponse({}));
  }

  async listEventAlgorithmResults(request: ListEventAlgorithmResultsRequest): Promise<ListEventAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventAlgorithmResultsWithOptions(request, runtime);
  }

  async deleteVideoSummaryTaskWithOptions(request: DeleteVideoSummaryTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVideoSummaryTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVideoSummaryTaskResponse>(await this.doRequest("DeleteVideoSummaryTask", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteVideoSummaryTaskResponse({}));
  }

  async deleteVideoSummaryTask(request: DeleteVideoSummaryTaskRequest): Promise<DeleteVideoSummaryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVideoSummaryTaskWithOptions(request, runtime);
  }

  async getVideoSummaryTaskResultWithOptions(request: GetVideoSummaryTaskResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoSummaryTaskResultResponse> {
    Util.validateModel(request);
    return $tea.cast<GetVideoSummaryTaskResultResponse>(await this.doRequest("GetVideoSummaryTaskResult", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetVideoSummaryTaskResultResponse({}));
  }

  async getVideoSummaryTaskResult(request: GetVideoSummaryTaskResultRequest): Promise<GetVideoSummaryTaskResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoSummaryTaskResultWithOptions(request, runtime);
  }

  async createVideoSummaryTaskWithOptions(request: CreateVideoSummaryTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoSummaryTaskResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVideoSummaryTaskResponse>(await this.doRequest("CreateVideoSummaryTask", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateVideoSummaryTaskResponse({}));
  }

  async createVideoSummaryTask(request: CreateVideoSummaryTaskRequest): Promise<CreateVideoSummaryTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoSummaryTaskWithOptions(request, runtime);
  }

  async listMotorAlgorithmResultsWithOptions(request: ListMotorAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListMotorAlgorithmResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMotorAlgorithmResultsResponse>(await this.doRequest("ListMotorAlgorithmResults", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListMotorAlgorithmResultsResponse({}));
  }

  async listMotorAlgorithmResults(request: ListMotorAlgorithmResultsRequest): Promise<ListMotorAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMotorAlgorithmResultsWithOptions(request, runtime);
  }

  async listFaceAlgorithmResultsWithOptions(request: ListFaceAlgorithmResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListFaceAlgorithmResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListFaceAlgorithmResultsResponse>(await this.doRequest("ListFaceAlgorithmResults", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListFaceAlgorithmResultsResponse({}));
  }

  async listFaceAlgorithmResults(request: ListFaceAlgorithmResultsRequest): Promise<ListFaceAlgorithmResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFaceAlgorithmResultsWithOptions(request, runtime);
  }

  async listMetricsWithOptions(request: ListMetricsRequest, runtime: $Util.RuntimeOptions): Promise<ListMetricsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListMetricsResponse>(await this.doRequest("ListMetrics", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListMetricsResponse({}));
  }

  async listMetrics(request: ListMetricsRequest): Promise<ListMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMetricsWithOptions(request, runtime);
  }

  async deleteRecordsWithOptions(request: DeleteRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRecordsResponse>(await this.doRequest("DeleteRecords", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteRecordsResponse({}));
  }

  async deleteRecords(request: DeleteRecordsRequest): Promise<DeleteRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRecordsWithOptions(request, runtime);
  }

  async recognizeFaceQualityWithOptions(request: RecognizeFaceQualityRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeFaceQualityResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeFaceQualityResponse>(await this.doRequest("RecognizeFaceQuality", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new RecognizeFaceQualityResponse({}));
  }

  async recognizeFaceQuality(request: RecognizeFaceQualityRequest): Promise<RecognizeFaceQualityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeFaceQualityWithOptions(request, runtime);
  }

  async listPersonsWithOptions(request: ListPersonsRequest, runtime: $Util.RuntimeOptions): Promise<ListPersonsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPersonsResponse>(await this.doRequest("ListPersons", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListPersonsResponse({}));
  }

  async listPersons(request: ListPersonsRequest): Promise<ListPersonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPersonsWithOptions(request, runtime);
  }

  async getPersonDetailWithOptions(request: GetPersonDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetPersonDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPersonDetailResponse>(await this.doRequest("GetPersonDetail", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetPersonDetailResponse({}));
  }

  async getPersonDetail(request: GetPersonDetailRequest): Promise<GetPersonDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPersonDetailWithOptions(request, runtime);
  }

  async getFaceOptionsWithOptions(request: GetFaceOptionsRequest, runtime: $Util.RuntimeOptions): Promise<GetFaceOptionsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFaceOptionsResponse>(await this.doRequest("GetFaceOptions", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetFaceOptionsResponse({}));
  }

  async getFaceOptions(request: GetFaceOptionsRequest): Promise<GetFaceOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFaceOptionsWithOptions(request, runtime);
  }

  async getBodyOptionsWithOptions(request: GetBodyOptionsRequest, runtime: $Util.RuntimeOptions): Promise<GetBodyOptionsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBodyOptionsResponse>(await this.doRequest("GetBodyOptions", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetBodyOptionsResponse({}));
  }

  async getBodyOptions(request: GetBodyOptionsRequest): Promise<GetBodyOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBodyOptionsWithOptions(request, runtime);
  }

  async stopMonitorWithOptions(request: StopMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopMonitorResponse> {
    Util.validateModel(request);
    return $tea.cast<StopMonitorResponse>(await this.doRequest("StopMonitor", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new StopMonitorResponse({}));
  }

  async stopMonitor(request: StopMonitorRequest): Promise<StopMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopMonitorWithOptions(request, runtime);
  }

  async searchBodyWithOptions(tmp: SearchBodyRequest, runtime: $Util.RuntimeOptions): Promise<SearchBodyResponse> {
    Util.validateModel(tmp);
    let request = new SearchBodyShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.optionList)) {
      request.optionListShrink = Util.toJSONString(tmp.optionList);
    }

    return $tea.cast<SearchBodyResponse>(await this.doRequest("SearchBody", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new SearchBodyResponse({}));
  }

  async searchBody(request: SearchBodyRequest): Promise<SearchBodyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchBodyWithOptions(request, runtime);
  }

  async addMonitorWithOptions(request: AddMonitorRequest, runtime: $Util.RuntimeOptions): Promise<AddMonitorResponse> {
    Util.validateModel(request);
    return $tea.cast<AddMonitorResponse>(await this.doRequest("AddMonitor", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new AddMonitorResponse({}));
  }

  async addMonitor(request: AddMonitorRequest): Promise<AddMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMonitorWithOptions(request, runtime);
  }

  async getMonitorResultWithOptions(request: GetMonitorResultRequest, runtime: $Util.RuntimeOptions): Promise<GetMonitorResultResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMonitorResultResponse>(await this.doRequest("GetMonitorResult", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetMonitorResultResponse({}));
  }

  async getMonitorResult(request: GetMonitorResultRequest): Promise<GetMonitorResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMonitorResultWithOptions(request, runtime);
  }

  async updateMonitorWithOptions(request: UpdateMonitorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMonitorResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateMonitorResponse>(await this.doRequest("UpdateMonitor", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateMonitorResponse({}));
  }

  async updateMonitor(request: UpdateMonitorRequest): Promise<UpdateMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMonitorWithOptions(request, runtime);
  }

  async getDeviceVideoUrlWithOptions(request: GetDeviceVideoUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceVideoUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeviceVideoUrlResponse>(await this.doRequest("GetDeviceVideoUrl", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetDeviceVideoUrlResponse({}));
  }

  async getDeviceVideoUrl(request: GetDeviceVideoUrlRequest): Promise<GetDeviceVideoUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceVideoUrlWithOptions(request, runtime);
  }

  async getInventoryWithOptions(request: GetInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GetInventoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetInventoryResponse>(await this.doRequest("GetInventory", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetInventoryResponse({}));
  }

  async getInventory(request: GetInventoryRequest): Promise<GetInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInventoryWithOptions(request, runtime);
  }

  async recognizeImageWithOptions(request: RecognizeImageRequest, runtime: $Util.RuntimeOptions): Promise<RecognizeImageResponse> {
    Util.validateModel(request);
    return $tea.cast<RecognizeImageResponse>(await this.doRequest("RecognizeImage", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new RecognizeImageResponse({}));
  }

  async recognizeImage(request: RecognizeImageRequest): Promise<RecognizeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recognizeImageWithOptions(request, runtime);
  }

  async listCorpsWithOptions(request: ListCorpsRequest, runtime: $Util.RuntimeOptions): Promise<ListCorpsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListCorpsResponse>(await this.doRequest("ListCorps", "HTTPS", "POST", "2020-05-15", "AK,APP", null, $tea.toMap(request), runtime), new ListCorpsResponse({}));
  }

  async listCorps(request: ListCorpsRequest): Promise<ListCorpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCorpsWithOptions(request, runtime);
  }

  async updateCorpWithOptions(request: UpdateCorpRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCorpResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateCorpResponse>(await this.doRequest("UpdateCorp", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateCorpResponse({}));
  }

  async updateCorp(request: UpdateCorpRequest): Promise<UpdateCorpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCorpWithOptions(request, runtime);
  }

  async updateDeviceWithOptions(request: UpdateDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDeviceResponse>(await this.doRequest("UpdateDevice", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new UpdateDeviceResponse({}));
  }

  async updateDevice(request: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceWithOptions(request, runtime);
  }

  async listDevicesWithOptions(request: ListDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListDevicesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDevicesResponse>(await this.doRequest("ListDevices", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new ListDevicesResponse({}));
  }

  async listDevices(request: ListDevicesRequest): Promise<ListDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDevicesWithOptions(request, runtime);
  }

  async getDeviceLiveUrlWithOptions(request: GetDeviceLiveUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetDeviceLiveUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDeviceLiveUrlResponse>(await this.doRequest("GetDeviceLiveUrl", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new GetDeviceLiveUrlResponse({}));
  }

  async getDeviceLiveUrl(request: GetDeviceLiveUrlRequest): Promise<GetDeviceLiveUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeviceLiveUrlWithOptions(request, runtime);
  }

  async searchFaceWithOptions(tmp: SearchFaceRequest, runtime: $Util.RuntimeOptions): Promise<SearchFaceResponse> {
    Util.validateModel(tmp);
    let request = new SearchFaceShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.optionList)) {
      request.optionListShrink = Util.toJSONString(tmp.optionList);
    }

    return $tea.cast<SearchFaceResponse>(await this.doRequest("SearchFace", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new SearchFaceResponse({}));
  }

  async searchFace(request: SearchFaceRequest): Promise<SearchFaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchFaceWithOptions(request, runtime);
  }

  async addDeviceWithOptions(request: AddDeviceRequest, runtime: $Util.RuntimeOptions): Promise<AddDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDeviceResponse>(await this.doRequest("AddDevice", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new AddDeviceResponse({}));
  }

  async addDevice(request: AddDeviceRequest): Promise<AddDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDeviceWithOptions(request, runtime);
  }

  async createCorpWithOptions(request: CreateCorpRequest, runtime: $Util.RuntimeOptions): Promise<CreateCorpResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateCorpResponse>(await this.doRequest("CreateCorp", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new CreateCorpResponse({}));
  }

  async createCorp(request: CreateCorpRequest): Promise<CreateCorpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCorpWithOptions(request, runtime);
  }

  async deleteDeviceWithOptions(request: DeleteDeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDeviceResponse>(await this.doRequest("DeleteDevice", "HTTPS", "POST", "2020-05-15", "AK", null, $tea.toMap(request), runtime), new DeleteDeviceResponse({}));
  }

  async deleteDevice(request: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDeviceWithOptions(request, runtime);
  }

  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

}
