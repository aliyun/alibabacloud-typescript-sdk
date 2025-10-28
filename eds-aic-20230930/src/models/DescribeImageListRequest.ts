// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListRequestImageBizTags extends $dara.Model {
  key?: string;
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
  imageBizTags?: DescribeImageListRequestImageBizTags[];
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * Android 12 image
   */
  imageName?: string;
  /**
   * @remarks
   * Image package type.
   * 
   * @example
   * VM
   */
  imagePackageType?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * Valid values:
   * 
   * *   User: custom images.
   * *   System: system images.
   * 
   * This parameter is required.
   * 
   * @example
   * System
   */
  imageType?: string;
  instanceType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
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
   * The pagination token that is used in the next request to retrieve a new page of results. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * The state of the image.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The image is available.
   * *   DELETE: The image is deleted.
   * *   INIT: The image is being initialized.
   * *   CREATE_FAILED: The image failed to be created.
   * *   CREATING: The image is being created.
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

