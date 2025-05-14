// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSpaceDirectoriesResponseBodyChildrenSpaceHdIconVO } from "./GetSpaceDirectoriesResponseBodyChildrenSpaceHdIconVo";
import { GetSpaceDirectoriesResponseBodyChildrenSpaceIconVO } from "./GetSpaceDirectoriesResponseBodyChildrenSpaceIconVo";
import { GetSpaceDirectoriesResponseBodyChildrenSpaceOwner } from "./GetSpaceDirectoriesResponseBodyChildrenSpaceOwner";
import { GetSpaceDirectoriesResponseBodyChildrenSpaceVisitorInfo } from "./GetSpaceDirectoriesResponseBodyChildrenSpaceVisitorInfo";


export class GetSpaceDirectoriesResponseBodyChildrenSpace extends $dara.Model {
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
  hdIconVO?: GetSpaceDirectoriesResponseBodyChildrenSpaceHdIconVO;
  iconVO?: GetSpaceDirectoriesResponseBodyChildrenSpaceIconVO;
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
  owner?: GetSpaceDirectoriesResponseBodyChildrenSpaceOwner;
  recentList?: any[];
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
  visitorInfo?: GetSpaceDirectoriesResponseBodyChildrenSpaceVisitorInfo;
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
      hdIconVO: GetSpaceDirectoriesResponseBodyChildrenSpaceHdIconVO,
      iconVO: GetSpaceDirectoriesResponseBodyChildrenSpaceIconVO,
      id: 'string',
      name: 'string',
      owner: GetSpaceDirectoriesResponseBodyChildrenSpaceOwner,
      recentList: { 'type': 'array', 'itemType': 'any' },
      type: 'number',
      url: 'string',
      visitorInfo: GetSpaceDirectoriesResponseBodyChildrenSpaceVisitorInfo,
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

