// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateImageProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * The image IDs.
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
  /**
   * @remarks
   * The protocol to which you want to update the image protocols. Set the value to ASP.
   * 
   * @example
   * ASP
   */
  targetProtocolType?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
      targetProtocolType: 'TargetProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      targetProtocolType: 'string',
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

