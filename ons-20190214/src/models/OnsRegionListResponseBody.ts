// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsRegionListResponseBodyDataRegionDo extends $dara.Model {
  channelName?: string;
  createTime?: number;
  id?: number;
  onsRegionId?: string;
  regionName?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      createTime: 'CreateTime',
      id: 'Id',
      onsRegionId: 'OnsRegionId',
      regionName: 'RegionName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      createTime: 'number',
      id: 'number',
      onsRegionId: 'string',
      regionName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBodyData extends $dara.Model {
  regionDo?: OnsRegionListResponseBodyDataRegionDo[];
  static names(): { [key: string]: string } {
    return {
      regionDo: 'RegionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionDo: { 'type': 'array', 'itemType': OnsRegionListResponseBodyDataRegionDo },
    };
  }

  validate() {
    if(Array.isArray(this.regionDo)) {
      $dara.Model.validateArray(this.regionDo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBody extends $dara.Model {
  data?: OnsRegionListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 72D14A84-45E5-4E01-A6DB-F63C4721****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsRegionListResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

