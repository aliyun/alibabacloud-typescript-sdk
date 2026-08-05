// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoShowListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio whose scheduled tasks you want to query.
   * 
   * > If you create a scheduled task by calling the [InitializeAutoShowListTask](https://help.aliyun.com/document_detail/2848056.html) operation, use the CasterId value returned by that operation. If you leave this parameter empty, all scheduled tasks under your account are queried by default.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

