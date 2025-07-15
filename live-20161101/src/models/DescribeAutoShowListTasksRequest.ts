// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoShowListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio for which you want to query scheduled tasks.
   * 
   * >  If the scheduled tasks were created by calling the [InitializeAutoShowListTask](https://help.aliyun.com/document_detail/2848056.html) operation, check the value of the response parameter CasterId to obtain the ID. If you do not specify this parameter, the system queries all the scheduled tasks that belong to the user specified by the OwnerId parameter.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  ownerId?: number;
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

