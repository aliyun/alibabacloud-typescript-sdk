// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the region to which the stack belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

