// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModuleVersionResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2022-05-13T02:21:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * mod-55f1739d9050fffed3ec3a2c4a5e5
   */
  moduleId?: string;
  /**
   * @remarks
   * The template version number.
   * 
   * @example
   * v3
   */
  moduleVersion?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * versionName
   */
  name?: string;
  /**
   * @remarks
   * The source path of the version.
   * 
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
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 792171BB-1A68-5148-8B9B-C7C728E1E98B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of version information.
   */
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

