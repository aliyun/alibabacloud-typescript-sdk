// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the associated template.
   * 
   * @example
   * true
   */
  deleteCascadedBundle?: boolean;
  /**
   * @remarks
   * The image IDs. You can specify 1 to 100 image IDs.
   * 
   * This parameter is required.
   */
  imageId?: string[];
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
  static names(): { [key: string]: string } {
    return {
      deleteCascadedBundle: 'DeleteCascadedBundle',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCascadedBundle: 'boolean',
      imageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
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

