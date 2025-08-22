// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModuleVersionResponseBodyVersions extends $dara.Model {
  /**
   * @example
   * 2022-05-13T02:21:49Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * mod-55f1739d9050fffed3ec3a2c4a5e5
   */
  moduleId?: string;
  /**
   * @example
   * v3
   */
  moduleVersion?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      sourcePath: 'sourcePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 792171BB-1A68-5148-8B9B-C7C728E1E98B
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  versions?: ListModuleVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListModuleVersionResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

