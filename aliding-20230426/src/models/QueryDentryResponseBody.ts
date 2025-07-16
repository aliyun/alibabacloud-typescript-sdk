// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDentryResponseBodyCreator extends $dara.Model {
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class QueryDentryResponseBodyLinkSourceInfoIconUrl extends $dara.Model {
  /**
   * @example
   * gh
   */
  line?: string;
  /**
   * @example
   * def
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      small: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodyLinkSourceInfo extends $dara.Model {
  /**
   * @example
   * docx
   */
  extension?: string;
  iconUrl?: QueryDentryResponseBodyLinkSourceInfoIconUrl;
  /**
   * @example
   * def
   */
  id?: string;
  /**
   * @example
   * 0
   */
  linkType?: number;
  /**
   * @example
   * def
   */
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      iconUrl: 'IconUrl',
      id: 'Id',
      linkType: 'LinkType',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      iconUrl: QueryDentryResponseBodyLinkSourceInfoIconUrl,
      id: 'string',
      linkType: 'number',
      spaceId: 'string',
    };
  }

  validate() {
    if(this.iconUrl && typeof (this.iconUrl as any).validate === 'function') {
      (this.iconUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceHdIconVO extends $dara.Model {
  /**
   * @example
   * http://
   */
  icon?: string;
  /**
   * @example
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceIconVO extends $dara.Model {
  /**
   * @example
   * http://
   */
  icon?: string;
  /**
   * @example
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      icon: 'Icon',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icon: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceOwner extends $dara.Model {
  /**
   * @example
   * 小钉
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class QueryDentryResponseBodySpaceRecentListCreator extends $dara.Model {
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class QueryDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl extends $dara.Model {
  /**
   * @example
   * gh
   */
  line?: string;
  /**
   * @example
   * def
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      small: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceRecentListLinkSourceInfo extends $dara.Model {
  /**
   * @example
   * docx
   */
  extension?: string;
  iconUrl?: QueryDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl;
  /**
   * @example
   * def
   */
  id?: string;
  /**
   * @example
   * 0
   */
  linkType?: number;
  /**
   * @example
   * def
   */
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      iconUrl: 'IconUrl',
      id: 'Id',
      linkType: 'LinkType',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      iconUrl: QueryDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl,
      id: 'string',
      linkType: 'number',
      spaceId: 'string',
    };
  }

  validate() {
    if(this.iconUrl && typeof (this.iconUrl as any).validate === 'function') {
      (this.iconUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceRecentListStatisticalInfo extends $dara.Model {
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceRecentListUpdater extends $dara.Model {
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class QueryDentryResponseBodySpaceRecentListVisitorInfo extends $dara.Model {
  dentryActions?: string[];
  /**
   * @example
   * 1
   */
  roleCode?: string;
  spaceActions?: string[];
  static names(): { [key: string]: string } {
    return {
      dentryActions: 'DentryActions',
      roleCode: 'RoleCode',
      spaceActions: 'SpaceActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryActions: { 'type': 'array', 'itemType': 'string' },
      roleCode: 'string',
      spaceActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dentryActions)) {
      $dara.Model.validateArray(this.dentryActions);
    }
    if(Array.isArray(this.spaceActions)) {
      $dara.Model.validateArray(this.spaceActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceRecentList extends $dara.Model {
  /**
   * @example
   * alidoc
   */
  contentType?: string;
  /**
   * @example
   * 12345678
   */
  createdTime?: number;
  creator?: QueryDentryResponseBodySpaceRecentListCreator;
  /**
   * @example
   * abc
   */
  dentryId?: string;
  /**
   * @example
   * file
   */
  dentryType?: string;
  /**
   * @example
   * cdefg
   */
  dentryUuid?: string;
  /**
   * @example
   * aabbcc
   */
  docKey?: string;
  /**
   * @example
   * alidoc
   */
  extension?: string;
  /**
   * @example
   * false
   */
  hasChildren?: boolean;
  linkSourceInfo?: QueryDentryResponseBodySpaceRecentListLinkSourceInfo;
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 测试组织/测试知识库/abc
   */
  path?: string;
  space?: any;
  /**
   * @example
   * bcd
   */
  spaceId?: string;
  statisticalInfo?: QueryDentryResponseBodySpaceRecentListStatisticalInfo;
  /**
   * @example
   * 12345678
   */
  updatedTime?: number;
  updater?: QueryDentryResponseBodySpaceRecentListUpdater;
  /**
   * @example
   * https://xxx.yy
   */
  url?: string;
  visitorInfo?: QueryDentryResponseBodySpaceRecentListVisitorInfo;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      dentryId: 'DentryId',
      dentryType: 'DentryType',
      dentryUuid: 'DentryUuid',
      docKey: 'DocKey',
      extension: 'Extension',
      hasChildren: 'HasChildren',
      linkSourceInfo: 'LinkSourceInfo',
      name: 'Name',
      path: 'Path',
      space: 'Space',
      spaceId: 'SpaceId',
      statisticalInfo: 'StatisticalInfo',
      updatedTime: 'UpdatedTime',
      updater: 'Updater',
      url: 'Url',
      visitorInfo: 'VisitorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      createdTime: 'number',
      creator: QueryDentryResponseBodySpaceRecentListCreator,
      dentryId: 'string',
      dentryType: 'string',
      dentryUuid: 'string',
      docKey: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      linkSourceInfo: QueryDentryResponseBodySpaceRecentListLinkSourceInfo,
      name: 'string',
      path: 'string',
      space: 'any',
      spaceId: 'string',
      statisticalInfo: QueryDentryResponseBodySpaceRecentListStatisticalInfo,
      updatedTime: 'number',
      updater: QueryDentryResponseBodySpaceRecentListUpdater,
      url: 'string',
      visitorInfo: QueryDentryResponseBodySpaceRecentListVisitorInfo,
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.linkSourceInfo && typeof (this.linkSourceInfo as any).validate === 'function') {
      (this.linkSourceInfo as any).validate();
    }
    if(this.statisticalInfo && typeof (this.statisticalInfo as any).validate === 'function') {
      (this.statisticalInfo as any).validate();
    }
    if(this.updater && typeof (this.updater as any).validate === 'function') {
      (this.updater as any).validate();
    }
    if(this.visitorInfo && typeof (this.visitorInfo as any).validate === 'function') {
      (this.visitorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpaceVisitorInfo extends $dara.Model {
  /**
   * @example
   * GET_DENTRY
   */
  dentryActions?: string[];
  /**
   * @example
   * 3
   */
  roleCode?: string;
  /**
   * @example
   * GET_SPACE
   */
  spaceActions?: string[];
  static names(): { [key: string]: string } {
    return {
      dentryActions: 'DentryActions',
      roleCode: 'RoleCode',
      spaceActions: 'SpaceActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryActions: { 'type': 'array', 'itemType': 'string' },
      roleCode: 'string',
      spaceActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dentryActions)) {
      $dara.Model.validateArray(this.dentryActions);
    }
    if(Array.isArray(this.spaceActions)) {
      $dara.Model.validateArray(this.spaceActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodySpace extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/imgextra/i1/O1xxxxx.png
   */
  cover?: string;
  /**
   * @example
   * 这是简介
   */
  description?: string;
  hdIconVO?: QueryDentryResponseBodySpaceHdIconVO;
  iconVO?: QueryDentryResponseBodySpaceIconVO;
  /**
   * @example
   * n9XJxxxxx
   */
  id?: string;
  name?: string;
  /**
   * @example
   * 测试知识库
   */
  owner?: QueryDentryResponseBodySpaceOwner;
  recentList?: QueryDentryResponseBodySpaceRecentList[];
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/spaces/n9XJ*******Xy/overview
   */
  url?: string;
  visitorInfo?: QueryDentryResponseBodySpaceVisitorInfo;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      description: 'Description',
      hdIconVO: 'HdIconVO',
      iconVO: 'IconVO',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      recentList: 'RecentList',
      type: 'Type',
      url: 'Url',
      visitorInfo: 'VisitorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: 'string',
      description: 'string',
      hdIconVO: QueryDentryResponseBodySpaceHdIconVO,
      iconVO: QueryDentryResponseBodySpaceIconVO,
      id: 'string',
      name: 'string',
      owner: QueryDentryResponseBodySpaceOwner,
      recentList: { 'type': 'array', 'itemType': QueryDentryResponseBodySpaceRecentList },
      type: 'number',
      url: 'string',
      visitorInfo: QueryDentryResponseBodySpaceVisitorInfo,
    };
  }

  validate() {
    if(this.hdIconVO && typeof (this.hdIconVO as any).validate === 'function') {
      (this.hdIconVO as any).validate();
    }
    if(this.iconVO && typeof (this.iconVO as any).validate === 'function') {
      (this.iconVO as any).validate();
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(Array.isArray(this.recentList)) {
      $dara.Model.validateArray(this.recentList);
    }
    if(this.visitorInfo && typeof (this.visitorInfo as any).validate === 'function') {
      (this.visitorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBodyUpdater extends $dara.Model {
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class QueryDentryResponseBodyVisitorInfo extends $dara.Model {
  dentryActions?: string[];
  /**
   * @example
   * 1
   */
  roleCode?: string;
  spaceActions?: string[];
  static names(): { [key: string]: string } {
    return {
      dentryActions: 'DentryActions',
      roleCode: 'RoleCode',
      spaceActions: 'SpaceActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryActions: { 'type': 'array', 'itemType': 'string' },
      roleCode: 'string',
      spaceActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dentryActions)) {
      $dara.Model.validateArray(this.dentryActions);
    }
    if(Array.isArray(this.spaceActions)) {
      $dara.Model.validateArray(this.spaceActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentryResponseBody extends $dara.Model {
  /**
   * @example
   * alidoc
   */
  contentType?: string;
  /**
   * @example
   * 12345678
   */
  createdTime?: number;
  creator?: QueryDentryResponseBodyCreator;
  /**
   * @example
   * abc
   */
  dentryId?: string;
  /**
   * @example
   * file
   */
  dentryType?: string;
  /**
   * @example
   * cdefg
   */
  dentryUuid?: string;
  /**
   * @example
   * aabbcc
   */
  docKey?: string;
  /**
   * @example
   * alidoc
   */
  extension?: string;
  /**
   * @example
   * false
   */
  hasChildren?: boolean;
  linkSourceInfo?: QueryDentryResponseBodyLinkSourceInfo;
  /**
   * @example
   * hello
   */
  name?: string;
  /**
   * @example
   * 测试组织/测试知识库/abc
   */
  path?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  space?: QueryDentryResponseBodySpace;
  /**
   * @example
   * bcd
   */
  spaceId?: string;
  /**
   * @example
   * 12345678
   */
  updatedTime?: number;
  updater?: QueryDentryResponseBodyUpdater;
  /**
   * @example
   * https://xxx.yy
   */
  url?: string;
  visitorInfo?: QueryDentryResponseBodyVisitorInfo;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      createdTime: 'createdTime',
      creator: 'creator',
      dentryId: 'dentryId',
      dentryType: 'dentryType',
      dentryUuid: 'dentryUuid',
      docKey: 'docKey',
      extension: 'extension',
      hasChildren: 'hasChildren',
      linkSourceInfo: 'linkSourceInfo',
      name: 'name',
      path: 'path',
      requestId: 'requestId',
      space: 'space',
      spaceId: 'spaceId',
      updatedTime: 'updatedTime',
      updater: 'updater',
      url: 'url',
      visitorInfo: 'visitorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      createdTime: 'number',
      creator: QueryDentryResponseBodyCreator,
      dentryId: 'string',
      dentryType: 'string',
      dentryUuid: 'string',
      docKey: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      linkSourceInfo: QueryDentryResponseBodyLinkSourceInfo,
      name: 'string',
      path: 'string',
      requestId: 'string',
      space: QueryDentryResponseBodySpace,
      spaceId: 'string',
      updatedTime: 'number',
      updater: QueryDentryResponseBodyUpdater,
      url: 'string',
      visitorInfo: QueryDentryResponseBodyVisitorInfo,
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    if(this.linkSourceInfo && typeof (this.linkSourceInfo as any).validate === 'function') {
      (this.linkSourceInfo as any).validate();
    }
    if(this.space && typeof (this.space as any).validate === 'function') {
      (this.space as any).validate();
    }
    if(this.updater && typeof (this.updater as any).validate === 'function') {
      (this.updater as any).validate();
    }
    if(this.visitorInfo && typeof (this.visitorInfo as any).validate === 'function') {
      (this.visitorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

