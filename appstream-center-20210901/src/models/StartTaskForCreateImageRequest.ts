// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskForCreateImageRequestResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource information.
   * 
   * @example
   * https://example.com/apps/business/setup.exe
   */
  resource?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * URL
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTaskForCreateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image creation mode. Currently, use the following mode:
   * 
   * - **BUILDER_MANUAL**: Manually enter the creation environment to install applications and configure the image.
   * 
   * @example
   * BUILDER_MANUAL
   */
  imageCreateMode?: string;
  /**
   * @remarks
   * The ID of the image. This parameter is not exposed by default.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The WUYING instance ID. The instance can be a cloud desktop instance or a workstation instance. To ensure data consistency in the image, stop the instance before initiating image creation.
   * 
   * @example
   * ecd-5u87dainamz54yk10
   */
  instanceId?: string;
  /**
   * @remarks
   * The step to jump to.
   * 
   * @example
   * CREATE_VALIDATE_ENV
   */
  jumpStep?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * CPU
   */
  performanceType?: string;
  /**
   * @remarks
   * The product type. Set this parameter to the following fixed value when you call the operation:
   * 
   * - CloudApp: WUYING Cloud App.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of resources required for image creation, such as the download URLs of applications to be installed. You can specify up to 100 items. The ResourceType and Resource of each item must correspond to each other.
   * 
   * @example
   * List of Object
   */
  resourceList?: StartTaskForCreateImageRequestResourceList[];
  /**
   * @remarks
   * The retry type.
   * 
   * @example
   * RETRY
   */
  retryType?: string;
  /**
   * @remarks
   * The running mode of the image creation environment. Valid values:
   * 
   * - **NORMAL**: Normal running mode.
   * - **COMPATIBLE**: Compatible running mode.
   * 
   * @example
   * NORMAL
   */
  runMode?: string;
  /**
   * @remarks
   * The source region where the image is created. If you do not specify this parameter, a region is randomly selected.
   * 
   * @example
   * cn-shanghai
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The sub-instance ID. This parameter is not applicable to cloud desktop scenarios. In workstation scenarios, pass the persistent session ID to ensure that a specific instance is located.
   * 
   * @example
   * p-0cc7s3n1l*****
   */
  subInstanceId?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The image version. This parameter is currently not exposed.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageCreateMode: 'ImageCreateMode',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      jumpStep: 'JumpStep',
      performanceType: 'PerformanceType',
      productType: 'ProductType',
      resourceList: 'ResourceList',
      retryType: 'RetryType',
      runMode: 'RunMode',
      sourceRegion: 'SourceRegion',
      subInstanceId: 'SubInstanceId',
      systemDiskSize: 'SystemDiskSize',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCreateMode: 'string',
      imageId: 'string',
      instanceId: 'string',
      jumpStep: 'string',
      performanceType: 'string',
      productType: 'string',
      resourceList: { 'type': 'array', 'itemType': StartTaskForCreateImageRequestResourceList },
      retryType: 'string',
      runMode: 'string',
      sourceRegion: 'string',
      subInstanceId: 'string',
      systemDiskSize: 'number',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

