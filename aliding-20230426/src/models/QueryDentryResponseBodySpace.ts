// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDentryResponseBodySpaceHdIconVO } from "./QueryDentryResponseBodySpaceHdIconVo";
import { QueryDentryResponseBodySpaceIconVO } from "./QueryDentryResponseBodySpaceIconVo";
import { QueryDentryResponseBodySpaceOwner } from "./QueryDentryResponseBodySpaceOwner";
import { QueryDentryResponseBodySpaceRecentList } from "./QueryDentryResponseBodySpaceRecentList";
import { QueryDentryResponseBodySpaceVisitorInfo } from "./QueryDentryResponseBodySpaceVisitorInfo";


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

