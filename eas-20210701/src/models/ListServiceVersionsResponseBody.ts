// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the service version was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T22:02:14Z
   */
  buildTime?: string;
  /**
   * @remarks
   * Indicates whether the image is available. Valid values:
   * 
   * *   true: The image is available.
   * *   false: The image is unavailable.
   * *   unknown: The availability of the image is unknown.
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
   * The returned message.
   * 
   * @example
   * Service is Running
   */
  message?: string;
  /**
   * @remarks
   * The service deployment configurations. This parameter is returned only if the service is deployed by using a custom image.
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
   * Indicates whether Elastic Algorithm service (EAS) is activated. Valid values:
   * 
   * *   true: EAS is activated.
   * *   false: EAS is not activated.
   * *   unknown: The activation of EAS is unknown.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The total number of entries returned.
   * 
   * @example
   * 166
   */
  totalCount?: number;
  /**
   * @remarks
   * The historical versions of the service.
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

