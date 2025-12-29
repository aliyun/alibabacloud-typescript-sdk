// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRoomStatusResponseBodyResultSceneList extends $dara.Model {
  sceneName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneName: 'SceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResultStatusList extends $dara.Model {
  statusName?: string;
  statusValue?: string;
  /**
   * @example
   * Thu Jan 09 13:56:51 CST 2025
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      statusName: 'StatusName',
      statusValue: 'StatusValue',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusName: 'string',
      statusValue: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBodyResult extends $dara.Model {
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  /**
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: QueryRoomStatusResponseBodyResultSceneList[];
  statusList?: QueryRoomStatusResponseBodyResultStatusList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultSceneList },
      statusList: { 'type': 'array', 'itemType': QueryRoomStatusResponseBodyResultStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRoomStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FAFCD152-4791-5F2F-B0BE-2DC06FD4F05B
   */
  requestId?: string;
  result?: QueryRoomStatusResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: QueryRoomStatusResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

