// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListRequestImageBizTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class DescribeImageListRequest extends $dara.Model {
  /**
   * @remarks
   * An array of tag objects.
   */
  imageBizTags?: DescribeImageListRequestImageBizTags[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Android 12 system image
   */
  imageName?: string;
  /**
   * @remarks
   * > This parameter is not yet available.
   * 
   * @example
   * null
   */
  imagePackageType?: string;
  /**
   * @remarks
   * The image type.
   * 
   * This parameter is required.
   * 
   * @example
   * System
   */
  imageType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the position from which to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the image.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      imageBizTags: 'ImageBizTags',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imagePackageType: 'ImagePackageType',
      imageType: 'ImageType',
      instanceType: 'InstanceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageBizTags: { 'type': 'array', 'itemType': DescribeImageListRequestImageBizTags },
      imageId: 'string',
      imageName: 'string',
      imagePackageType: 'string',
      imageType: 'string',
      instanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      systemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageBizTags)) {
      $dara.Model.validateArray(this.imageBizTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

