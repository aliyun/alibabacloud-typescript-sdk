// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDashboardsResponseBodyDashboardVos extends $dara.Model {
  dashboardType?: string;
  exporter?: string;
  id?: string;
  isArmsExporter?: boolean;
  kind?: string;
  name?: string;
  needUpdate?: boolean;
  tags?: string[];
  time?: string;
  title?: string;
  type?: string;
  uid?: string;
  url?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardType: 'DashboardType',
      exporter: 'Exporter',
      id: 'Id',
      isArmsExporter: 'IsArmsExporter',
      kind: 'Kind',
      name: 'Name',
      needUpdate: 'NeedUpdate',
      tags: 'Tags',
      time: 'Time',
      title: 'Title',
      type: 'Type',
      uid: 'Uid',
      url: 'Url',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardType: 'string',
      exporter: 'string',
      id: 'string',
      isArmsExporter: 'boolean',
      kind: 'string',
      name: 'string',
      needUpdate: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      title: 'string',
      type: 'string',
      uid: 'string',
      url: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseBody extends $dara.Model {
  dashboardVos?: ListDashboardsResponseBodyDashboardVos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardVos: 'DashboardVos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardVos: { 'type': 'array', 'itemType': ListDashboardsResponseBodyDashboardVos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dashboardVos)) {
      $dara.Model.validateArray(this.dashboardVos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

