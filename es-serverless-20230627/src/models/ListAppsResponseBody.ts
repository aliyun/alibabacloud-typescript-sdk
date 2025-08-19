// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsResponseBodyResultTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-abc
   */
  appId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * es-severless-test-app
   */
  appName?: string;
  appType?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  createTime?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  instanceId?: string;
  /**
   * @example
   * 2022-12-27T07:09:11.000Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * OwnerID账号ID
   * 
   * @example
   * *********7595
   */
  ownerId?: string;
  /**
   * @remarks
   * 代表region的资源属性字段
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 代表资源状态的资源属性字段
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  tags?: ListAppsResponseBodyResultTags[];
  /**
   * @example
   * 7.10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appName: 'appName',
      appType: 'appType',
      createTime: 'createTime',
      description: 'description',
      instanceId: 'instanceId',
      modifiedTime: 'modifiedTime',
      ownerId: 'ownerId',
      regionId: 'regionId',
      status: 'status',
      tags: 'tags',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'string',
      ownerId: 'string',
      regionId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAppsResponseBodyResultTags },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $dara.Model {
  /**
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: ListAppsResponseBodyResult[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAppsResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

