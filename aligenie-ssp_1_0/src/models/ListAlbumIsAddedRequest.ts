// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumIsAddedRequestDeviceInfo extends $dara.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedRequestUserInfo extends $dara.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
  idType?: string;
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumIsAddedRequest extends $dara.Model {
  albumIdList?: string[];
  deviceInfo?: ListAlbumIsAddedRequestDeviceInfo;
  userInfo?: ListAlbumIsAddedRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      albumIdList: 'AlbumIdList',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumIdList: { 'type': 'array', 'itemType': 'string' },
      deviceInfo: ListAlbumIsAddedRequestDeviceInfo,
      userInfo: ListAlbumIsAddedRequestUserInfo,
    };
  }

  validate() {
    if(Array.isArray(this.albumIdList)) {
      $dara.Model.validateArray(this.albumIdList);
    }
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

