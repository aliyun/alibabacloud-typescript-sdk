// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuilderImageByParentRequestResourceList extends $dara.Model {
  /**
   * @remarks
   * The resource content corresponding to ResourceType. For the URL type, enter or return an accessible resource URL.
   * 
   * @example
   * https://example.com/apps/business/setup.exe
   */
  resource?: string;
  /**
   * @remarks
   * The provision method of the resource content. Valid values:
   * 
   * - **HOSTED**: hosted resource
   * - **TEXT**: text resource
   * - **URL**: resource provided through a URL
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

export class BuilderImageByParentRequest extends $dara.Model {
  /**
   * @remarks
   * The business type to which the image belongs. **Required**. Valid values:
   * 
   * - **1**: basic product
   * - **2**: personal cloud
   * - **3**: cloud office
   * - **4**: cloud flow
   * - **10**: personal edition
   * - **20**: business edition
   * - **60**: Linggou team edition
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The capacity of the data disk in the creation environment. Unit: GiB. Specify this parameter when a data disk is required, and ensure that it meets the disk requirements of the selected resource specifications.
   * 
   * @example
   * 100
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The description of the new image, which facilitates subsequent querying and distinguishing of images.
   * 
   * @example
   * Business image that includes office applications and standard configurations
   */
  description?: string;
  /**
   * @remarks
   * The operating system distribution information of the image. Enter the distribution identifier that is consistent with the parent image used.
   * 
   * @example
   * Ubuntu 22.04 64-bit
   */
  distro?: string;
  /**
   * @remarks
   * The list of driver IDs used when creating the image. A maximum of 200 items are supported. When you need to specify drivers, enter the IDs of existing drivers that are applicable to the target image.
   * 
   * **If PropertyMap.DRIVER_LIST is also specified, this parameter overwrites the driver list in it.**
   * 
   * @example
   * ["6d4af751-f522-40d7-ab6c-4a0ae587****","b5bdf6c0-41de-4878-8963-e8324106****"]
   */
  driverIdList?: string[];
  /**
   * @remarks
   * The image creation mode. Use the following mode:
   * 
   * - **BUILDER_MANUAL**: manually enter the creation environment to install applications and configure the image.
   * 
   * This parameter is required.
   * 
   * @example
   * BUILDER_MANUAL
   */
  imageCreateMode?: string;
  /**
   * @remarks
   * The name of the new image. **Required**. The name must start with a letter or a Chinese character and can contain letters, digits, Chinese characters, colons (:), underscores (_), periods (.), and hyphens (-). It cannot start with http:// or https://. The length is calculated as 3 for each Chinese character and 1 for each other character, with a total length of 2 to 64 characters.
   * 
   * @example
   * OfficeImage_202611
   */
  imageName?: string;
  /**
   * @remarks
   * The language of the image. Valid values:
   * 
   * - **zh-CN**: Simplified Chinese
   * - **zh-HK**: Traditional Chinese (Hong Kong)
   * - **en-US**: English
   * - **ja-JP**: Japanese
   * - **CN**: compatible value for Simplified Chinese
   * - **EN**: compatible value for English
   * - **JP**: compatible value for Japanese
   * - **CN-HK**: compatible value for Traditional Chinese (Hong Kong)
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the node specifications for the creation resources. You can call ListNodeInstanceType to query the ID. Select node specifications that are active in the creation region and under the associated product, and that meet the CPU or GPU computing requirements.
   * 
   * @example
   * appstreaming.general.4c8g
   */
  nodeInstanceType?: string;
  /**
   * @remarks
   * The ID of the office network used by the creation resources. Specify this parameter when a specific office network is required, and ensure that it is consistent with the creation region.
   * 
   * @example
   * cn-hangzhou+dir-example****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The package type of the image. Keep it consistent with the selected parent image and the creation scenario. Valid values:
   * 
   * - **Ecs**: ECS instance image
   * - **Vhd**: VHD application image
   * - **Container**: container image
   * - **Ecs_Container**: combined ECS and container image
   * - **K8s_Node**: Kubernetes node image
   * 
   * **This operation does not provide the BaseImageId parameter. You cannot explicitly specify the Vhd or Container type that requires a base image to be configured separately.**
   * 
   * @example
   * Ecs
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the parent image used to create the new image. **Required**. You can call ListImage to query the ID. An available distribution record of the parent image must exist in the region where the image is to be created.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-bp1parent****
   */
  parentImageId?: string;
  /**
   * @remarks
   * The computing type of the creation resources. Valid values:
   * 
   * - **CPU**: uses CPU compute resources
   * - **GPU**: uses GPU compute resources
   * 
   * This parameter is required.
   * 
   * @example
   * CPU
   */
  performanceType?: string;
  /**
   * @remarks
   * The product to which the image belongs. **Required**. Use an activated product and keep it consistent with the selected parent image. Valid values:
   * 
   * - **CloudGame**: cloud gaming
   * - **CloudApp**: Wuying cloud application
   * - **CloudBrowser**: secure browser
   * - **CloudDesktop**: Wuying cloud desktop
   * - **ImageBuilder**: image creation resource
   * - **ImageValidate**: image validation resource
   * - **AndroidCloud**: Android cloud
   * - **GpuRender**: GPU rendering
   * - **AndroidGpuRender**: Android cloud GPU rendering
   * - **WuyingServer**: enterprise edition workstation
   * - **GpuProxy**: GPU remote rendering proxy
   * - **GpuCache**: GPU remote rendering cache
   * - **AIAgent**: AI agent service
   * - **HostedDesktop**: hosted desktop
   * - **WuyingWorkstation**: personal edition container workstation
   * - **WuyingWorkstationBusiness**: business edition container workstation
   * - **WuyingWorkstationTeam**: Linggou container workstation team edition
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The extended properties of the image. Both keys and values are strings. This parameter can be omitted when no extended configuration is required.
   * 
   * The property key for the driver list is DRIVER_LIST, and the value is a JSON string of an array of driver IDs. We recommend that you specify drivers by using DriverIdList. **If both DriverIdList and PropertyMap.DRIVER_LIST are specified, DriverIdList prevails.** Specify other extended properties only when their purposes and values are confirmed.
   * 
   * @example
   * {"DRIVER_LIST":"[\\"6d4af751-f522-40d7-ab6c-4a0ae587****\\",\\"b5bdf6c0-41de-4878-8963-e8324106****\\"]"}
   */
  propertyMap?: { [key: string]: string };
  /**
   * @remarks
   * The list of resources required for image creation, such as the download URLs of applications to be installed. A maximum of 100 items are supported. The ResourceType and Resource of each item must correspond to each other.
   */
  resourceList?: BuilderImageByParentRequestResourceList[];
  /**
   * @remarks
   * The running mode of the image creation environment. Valid values:
   * 
   * - **NORMAL**: normal running mode
   * - **COMPATIBLE**: compatible running mode
   * 
   * @example
   * NORMAL
   */
  runMode?: string;
  /**
   * @remarks
   * The ID of the region where the image is created. The selected parent image must have been distributed to this region. Available regions are also affected by the region configurations of the account and the product.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The capacity of the system disk in the creation environment. Unit: GiB. The capacity cannot be less than the system disk capacity required by the parent image and must meet the disk requirements of the selected resource specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of vSwitch IDs used by the creation resources. A maximum of 100 items are supported. The vSwitches must belong to the selected office network and be located in the creation region.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * The display name of the new image version, which is used to distinguish different versions of the same image.
   * 
   * @example
   * Office environment-202611
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      distro: 'Distro',
      driverIdList: 'DriverIdList',
      imageCreateMode: 'ImageCreateMode',
      imageName: 'ImageName',
      language: 'Language',
      nodeInstanceType: 'NodeInstanceType',
      officeSiteId: 'OfficeSiteId',
      packageType: 'PackageType',
      parentImageId: 'ParentImageId',
      performanceType: 'PerformanceType',
      productType: 'ProductType',
      propertyMap: 'PropertyMap',
      resourceList: 'ResourceList',
      runMode: 'RunMode',
      sourceRegion: 'SourceRegion',
      systemDiskSize: 'SystemDiskSize',
      vSwitchIdList: 'VSwitchIdList',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      dataDiskSize: 'number',
      description: 'string',
      distro: 'string',
      driverIdList: { 'type': 'array', 'itemType': 'string' },
      imageCreateMode: 'string',
      imageName: 'string',
      language: 'string',
      nodeInstanceType: 'string',
      officeSiteId: 'string',
      packageType: 'string',
      parentImageId: 'string',
      performanceType: 'string',
      productType: 'string',
      propertyMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceList: { 'type': 'array', 'itemType': BuilderImageByParentRequestResourceList },
      runMode: 'string',
      sourceRegion: 'string',
      systemDiskSize: 'number',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.driverIdList)) {
      $dara.Model.validateArray(this.driverIdList);
    }
    if(this.propertyMap) {
      $dara.Model.validateMap(this.propertyMap);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

