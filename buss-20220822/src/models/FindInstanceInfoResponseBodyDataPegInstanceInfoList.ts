// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo } from "./FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo";


export class FindInstanceInfoResponseBodyDataPegInstanceInfoList extends $dara.Model {
  bussinessCode?: string;
  coordinate?: { [key: string]: any };
  idType?: string;
  instanceId?: string;
  serviceCreatedTime?: string;
  userId?: string;
  userInfo?: FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      coordinate: 'Coordinate',
      idType: 'IdType',
      instanceId: 'InstanceId',
      serviceCreatedTime: 'ServiceCreatedTime',
      userId: 'UserId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      coordinate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idType: 'string',
      instanceId: 'string',
      serviceCreatedTime: 'string',
      userId: 'string',
      userInfo: FindInstanceInfoResponseBodyDataPegInstanceInfoListUserInfo,
    };
  }

  validate() {
    if(this.coordinate) {
      $dara.Model.validateMap(this.coordinate);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

