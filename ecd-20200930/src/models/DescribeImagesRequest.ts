// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud desktop specification. You can call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/436816.html) to obtain this parameter.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopInstanceType?: string;
  /**
   * @remarks
   * The image version information.
   * 
   * @example
   * 0.0.3-R-20220616.133609
   */
  fotaVersion?: string;
  /**
   * @remarks
   * Specifies whether the image is a GPU image.
   * 
   * @example
   * false
   */
  gpuCategory?: boolean;
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * 417.22
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The image ID. You can specify one or more image IDs.
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
   * The image status.
   * 
   * @example
   * Available
   */
  imageStatus?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * SYSTEM
   */
  imageType?: string;
  /**
   * @remarks
   * The operating system language.
   * 
   * @example
   * en-US
   */
  languageType?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100
   * - Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there is no next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system type. Default value: `null`.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

