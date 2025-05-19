// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeListRequest extends $dara.Model {
  hostName?: string;
  instanceIds?: string;
  instanceRegionId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  serialNumbers?: string;
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      serialNumbers: 'SerialNumbers',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      instanceIds: 'string',
      instanceRegionId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      serialNumbers: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

