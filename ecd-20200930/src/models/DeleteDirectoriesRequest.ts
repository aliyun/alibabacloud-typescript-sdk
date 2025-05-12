// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The directory IDs. You can specify one or more directory IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string[];
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
      directoryId: 'DirectoryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directoryId)) {
      $dara.Model.validateArray(this.directoryId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

