// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type of the cloud computer. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/436816.html) operation to obtain the parameter value.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopInstanceType?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 0.0.3-R-20220616.133609
   */
  fotaVersion?: string;
  /**
   * @remarks
   * Specifies whether the images are GPU-accelerated images.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The version of the GPU driver.
   * 
   * @example
   * 417.22
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The IDs of the images. You can specify one or more image IDs.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string[];
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Win_01
   */
  imageName?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * @example
   * Available
   */
  imageStatus?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * SYSTEM
   */
  imageType?: string;
  /**
   * @remarks
   * The language of the OS.
   * 
   * @example
   * en-US
   */
  languageType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * *   Maximum value: 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If you do not specify this parameter, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the operating system of the images. Default value: `null`.
   * 
   * Valid values:
   * 
   * *   Linux
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Windows
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * *   ASP: in-house Adaptive Streaming Protocol (ASP) (recommended)
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * SINGLE_SESSION
   */
  sessionType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopInstanceType: 'DesktopInstanceType',
      fotaVersion: 'FotaVersion',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageStatus: 'ImageStatus',
      imageType: 'ImageType',
      languageType: 'LanguageType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      sessionType: 'SessionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopInstanceType: 'string',
      fotaVersion: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      imageName: 'string',
      imageStatus: 'string',
      imageType: 'string',
      languageType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      protocolType: 'string',
      regionId: 'string',
      sessionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageId)) {
      $dara.Model.validateArray(this.imageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

