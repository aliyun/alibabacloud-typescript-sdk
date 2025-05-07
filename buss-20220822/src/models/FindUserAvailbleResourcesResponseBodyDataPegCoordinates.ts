// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindUserAvailbleResourcesResponseBodyDataPegCoordinates extends $dara.Model {
  bussinessCode?: string;
  chargeType?: string;
  coordinate?: { [key: string]: any };
  idType?: string;
  instanceId?: string;
  region?: string;
  releaseTime?: string;
  resCreateTime?: string;
  resourceStatus?: string;
  resourceType?: string;
  serviceCreatedTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      chargeType: 'ChargeType',
      coordinate: 'Coordinate',
      idType: 'IdType',
      instanceId: 'InstanceId',
      region: 'Region',
      releaseTime: 'ReleaseTime',
      resCreateTime: 'ResCreateTime',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      serviceCreatedTime: 'ServiceCreatedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      chargeType: 'string',
      coordinate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      idType: 'string',
      instanceId: 'string',
      region: 'string',
      releaseTime: 'string',
      resCreateTime: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      serviceCreatedTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.coordinate) {
      $dara.Model.validateMap(this.coordinate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

