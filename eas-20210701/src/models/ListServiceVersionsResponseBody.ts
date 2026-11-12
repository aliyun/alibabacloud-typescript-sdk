// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The UTC time when the version was created.
   * 
   * @example
   * 2022-08-29T22:02:14Z
   */
  buildTime?: string;
  /**
   * @remarks
   * The availability of the image. Valid values:
   * - true: Available.
   * - false: Unavailable.
   * - unknown: Unknown.
   * 
   * @example
   * true
   */
  imageAvailable?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 4
   */
  imageId?: number;
  /**
   * @remarks
   * The summary of the service.
   * 
   * @example
   * Service is Running
   */
  message?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * new version.
   */
  remark?: string;
  /**
   * @remarks
   * The deployment configuration of the service. This field is returned only for custom image deployments.
   * 
   * @example
   * {
   *     "metadata": {
   *         "cpu": 1,
   *         "instance": 1,
   *         "memory": 1024
   *     },
   *     "name": "echo"
   * }
   */
  serviceConfig?: string;
  /**
   * @remarks
   * Indicates whether the EAS service is enabled. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * - unknown: Unknown.
   * 
   * @example
   * true
   */
  serviceRunnable?: string;
  static names(): { [key: string]: string } {
    return {
      buildTime: 'BuildTime',
      imageAvailable: 'ImageAvailable',
      imageId: 'ImageId',
      message: 'Message',
      remark: 'Remark',
      serviceConfig: 'ServiceConfig',
      serviceRunnable: 'ServiceRunnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTime: 'string',
      imageAvailable: 'string',
      imageId: 'number',
      message: 'string',
      remark: 'string',
      serviceConfig: 'string',
      serviceRunnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number of the returned historical versions.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of historical versions returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E089D584-B6F4-50C4-9902-DA2295B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of versions.
   * 
   * @example
   * 166
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of versions.
   */
  versions?: ListServiceVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListServiceVersionsResponseBodyVersions },
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

