// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PunishResourceSearchResponseBodyDataList extends $dara.Model {
  actionCode?: string;
  bussinessCode?: string;
  class?: string;
  coordinate?: string;
  creator?: string;
  deleted?: boolean;
  domain?: string;
  extras?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  instanceId?: string;
  ip?: string;
  modifier?: string;
  objectId?: string;
  objectType?: string;
  objectValue?: string;
  punishFrom?: string;
  reason?: string;
  requestId?: number;
  sourceCode?: string;
  status?: string;
  url?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      bussinessCode: 'BussinessCode',
      class: 'Class',
      coordinate: 'Coordinate',
      creator: 'Creator',
      deleted: 'Deleted',
      domain: 'Domain',
      extras: 'Extras',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      ip: 'Ip',
      modifier: 'Modifier',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      objectValue: 'ObjectValue',
      punishFrom: 'PunishFrom',
      reason: 'Reason',
      requestId: 'RequestId',
      sourceCode: 'SourceCode',
      status: 'Status',
      url: 'Url',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      bussinessCode: 'string',
      class: 'string',
      coordinate: 'string',
      creator: 'string',
      deleted: 'boolean',
      domain: 'string',
      extras: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      ip: 'string',
      modifier: 'string',
      objectId: 'string',
      objectType: 'string',
      objectValue: 'string',
      punishFrom: 'string',
      reason: 'string',
      requestId: 'number',
      sourceCode: 'string',
      status: 'string',
      url: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

