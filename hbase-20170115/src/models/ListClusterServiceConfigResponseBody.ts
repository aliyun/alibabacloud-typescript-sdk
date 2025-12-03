// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterServiceConfigResponseBodyConfigListConfig extends $dara.Model {
  defaultValue?: string;
  description?: string;
  name?: string;
  needRestart?: string;
  runningValue?: string;
  unit?: string;
  valueRange?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      needRestart: 'NeedRestart',
      runningValue: 'RunningValue',
      unit: 'Unit',
      valueRange: 'ValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      needRestart: 'string',
      runningValue: 'string',
      unit: 'string',
      valueRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigResponseBodyConfigList extends $dara.Model {
  config?: ListClusterServiceConfigResponseBodyConfigListConfig[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'array', 'itemType': ListClusterServiceConfigResponseBodyConfigListConfig },
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterServiceConfigResponseBody extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  configList?: ListClusterServiceConfigResponseBodyConfigList;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      configList: 'ConfigList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      configList: ListClusterServiceConfigResponseBodyConfigList,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.configList && typeof (this.configList as any).validate === 'function') {
      (this.configList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

