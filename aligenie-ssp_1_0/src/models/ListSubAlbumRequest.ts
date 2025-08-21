// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubAlbumRequestDeviceInfo extends $dara.Model {
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

export class ListSubAlbumRequestQuerySubscriptionAlbumRequestPage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestQuerySubscriptionAlbumRequest extends $dara.Model {
  /**
   * @example
   * 4476001
   */
  albumId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80011
   */
  categoryId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListSubAlbumRequestQuerySubscriptionAlbumRequestPage;
  /**
   * @example
   * 睡前故事
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      albumId: 'AlbumId',
      categoryId: 'CategoryId',
      page: 'Page',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      categoryId: 'number',
      page: ListSubAlbumRequestQuerySubscriptionAlbumRequestPage,
      title: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubAlbumRequestUserInfo extends $dara.Model {
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

export class ListSubAlbumRequest extends $dara.Model {
  deviceInfo?: ListSubAlbumRequestDeviceInfo;
  /**
   * @remarks
   * request
   */
  querySubscriptionAlbumRequest?: ListSubAlbumRequestQuerySubscriptionAlbumRequest;
  userInfo?: ListSubAlbumRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      querySubscriptionAlbumRequest: 'QuerySubscriptionAlbumRequest',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListSubAlbumRequestDeviceInfo,
      querySubscriptionAlbumRequest: ListSubAlbumRequestQuerySubscriptionAlbumRequest,
      userInfo: ListSubAlbumRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.querySubscriptionAlbumRequest && typeof (this.querySubscriptionAlbumRequest as any).validate === 'function') {
      (this.querySubscriptionAlbumRequest as any).validate();
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

