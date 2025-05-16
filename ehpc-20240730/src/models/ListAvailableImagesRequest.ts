// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvailableImagesRequestDirectoryService } from "./ListAvailableImagesRequestDirectoryService";
import { ListAvailableImagesRequestScheduler } from "./ListAvailableImagesRequestScheduler";


export class ListAvailableImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the domain account service.
   */
  directoryService?: ListAvailableImagesRequestDirectoryService;
  /**
   * @remarks
   * Specifies whether to return images in which hyper-threading is enabled.
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The network type of the images that you want to query.
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The image source. Valid values:
   * 
   * *   system: system image.
   * *   self: custom image.
   * *   others: shared image.
   * 
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * >  By default, if you do not specify an instance type, the list of images that are supported by all instance types are queried. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to return published community images. Valid values:
   * 
   * *   true: returns published community images. If you set the value of this parameter to `true`, the `ImageOwnerAlias` parameter must be set to `others`.
   * *   false: returns non-community images. The value of the `ImageOwnerAlias` parameter prevails.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  isPublic?: boolean;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The scheduler information about the images that you want to query.
   */
  scheduler?: ListAvailableImagesRequestScheduler;
  static names(): { [key: string]: string } {
    return {
      directoryService: 'DirectoryService',
      enableHT: 'EnableHT',
      HPCInterConnect: 'HPCInterConnect',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryService: ListAvailableImagesRequestDirectoryService,
      enableHT: 'boolean',
      HPCInterConnect: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isPublic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      scheduler: ListAvailableImagesRequestScheduler,
    };
  }

  validate() {
    if(this.directoryService && typeof (this.directoryService as any).validate === 'function') {
      (this.directoryService as any).validate();
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

