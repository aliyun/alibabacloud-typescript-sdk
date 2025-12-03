// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn extends $dara.Model {
  /**
   * @example
   * Standby
   */
  hbaseType?: string;
  /**
   * @example
   * ha-v21tmnxjwh2yuy1il-phoenix.bds.9b78df04-b.rds.aliyuncs.com:8765
   */
  slbConnAddr?: string;
  /**
   * @example
   * phoenix
   */
  slbType?: string;
  static names(): { [key: string]: string } {
    return {
      hbaseType: 'HbaseType',
      slbConnAddr: 'SlbConnAddr',
      slbType: 'SlbType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaseType: 'string',
      slbConnAddr: 'string',
      slbType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList extends $dara.Model {
  haSlbConn?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn[];
  static names(): { [key: string]: string } {
    return {
      haSlbConn: 'HaSlbConn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haSlbConn: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn },
    };
  }

  validate() {
    if(Array.isArray(this.haSlbConn)) {
      $dara.Model.validateArray(this.haSlbConn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterListCluster extends $dara.Model {
  /**
   * @example
   * hb-t4nn7dy1u1etbzmzm
   */
  activeName?: string;
  /**
   * @remarks
   * bdsId
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsName?: string;
  /**
   * @example
   * ha-v21tmnxjwh2yuy1il
   */
  haName?: string;
  haSlbConnList?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList;
  /**
   * @example
   * hb-t4n0ye37832tx22vz
   */
  standbyName?: string;
  static names(): { [key: string]: string } {
    return {
      activeName: 'ActiveName',
      bdsName: 'BdsName',
      haName: 'HaName',
      haSlbConnList: 'HaSlbConnList',
      standbyName: 'StandbyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeName: 'string',
      bdsName: 'string',
      haName: 'string',
      haSlbConnList: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList,
      standbyName: 'string',
    };
  }

  validate() {
    if(this.haSlbConnList && typeof (this.haSlbConnList as any).validate === 'function') {
      (this.haSlbConnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBodyClusterList extends $dara.Model {
  cluster?: QueryHBaseHaDBResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': QueryHBaseHaDBResponseBodyClusterListCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHBaseHaDBResponseBody extends $dara.Model {
  clusterList?: QueryHBaseHaDBResponseBodyClusterList;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 963355AD-A3B1-4654-AFFC-B5186EB8F889
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: QueryHBaseHaDBResponseBodyClusterList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.clusterList && typeof (this.clusterList as any).validate === 'function') {
      (this.clusterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

