// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyDentryResponseBodySpaceRecentListCreator } from "./CopyDentryResponseBodySpaceRecentListCreator";
import { CopyDentryResponseBodySpaceRecentListLinkSourceInfo } from "./CopyDentryResponseBodySpaceRecentListLinkSourceInfo";
import { CopyDentryResponseBodySpaceRecentListStatisticalInfo } from "./CopyDentryResponseBodySpaceRecentListStatisticalInfo";
import { CopyDentryResponseBodySpaceRecentListUpdater } from "./CopyDentryResponseBodySpaceRecentListUpdater";
import { CopyDentryResponseBodySpaceRecentListVisitorInfo } from "./CopyDentryResponseBodySpaceRecentListVisitorInfo";


export class CopyDentryResponseBodySpaceRecentList extends $dara.Model {
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
  creator?: CopyDentryResponseBodySpaceRecentListCreator;
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
  linkSourceInfo?: CopyDentryResponseBodySpaceRecentListLinkSourceInfo;
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
  statisticalInfo?: CopyDentryResponseBodySpaceRecentListStatisticalInfo;
  /**
   * @example
   * 12345678
   */
  updatedTime?: number;
  updater?: CopyDentryResponseBodySpaceRecentListUpdater;
  /**
   * @example
   * https://xxx.yy
   */
  url?: string;
  visitorInfo?: CopyDentryResponseBodySpaceRecentListVisitorInfo;
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
      creator: CopyDentryResponseBodySpaceRecentListCreator,
      dentryId: 'string',
      dentryType: 'string',
      dentryUuid: 'string',
      docKey: 'string',
      extension: 'string',
      hasChildren: 'boolean',
      linkSourceInfo: CopyDentryResponseBodySpaceRecentListLinkSourceInfo,
      name: 'string',
      path: 'string',
      space: 'any',
      spaceId: 'string',
      statisticalInfo: CopyDentryResponseBodySpaceRecentListStatisticalInfo,
      updatedTime: 'number',
      updater: CopyDentryResponseBodySpaceRecentListUpdater,
      url: 'string',
      visitorInfo: CopyDentryResponseBodySpaceRecentListVisitorInfo,
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

