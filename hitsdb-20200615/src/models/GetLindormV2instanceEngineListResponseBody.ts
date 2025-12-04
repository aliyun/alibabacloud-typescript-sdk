// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceEngineListResponseBodyEngineListNetInfoList extends $dara.Model {
  accessType?: number;
  connectionString?: string;
  netType?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'number',
      connectionString: 'string',
      netType: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceEngineListResponseBodyEngineList extends $dara.Model {
  engineType?: string;
  netInfoList?: GetLindormV2InstanceEngineListResponseBodyEngineListNetInfoList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      netInfoList: 'NetInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      netInfoList: { 'type': 'array', 'itemType': GetLindormV2InstanceEngineListResponseBodyEngineListNetInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoList)) {
      $dara.Model.validateArray(this.netInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceEngineListResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  engineList?: GetLindormV2InstanceEngineListResponseBodyEngineList[];
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      engineList: 'EngineList',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      engineList: { 'type': 'array', 'itemType': GetLindormV2InstanceEngineListResponseBodyEngineList },
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

