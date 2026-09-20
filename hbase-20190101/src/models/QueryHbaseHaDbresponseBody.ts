// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnListHaSlbConn extends $dara.Model {
  hbaseType?: string;
  slbConnAddr?: string;
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
  activeName?: string;
  bdsName?: string;
  haName?: string;
  haSlbConnList?: QueryHBaseHaDBResponseBodyClusterListClusterHaSlbConnList;
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 963355AD-A3B1-4654-AFFC-B5186EB8F889
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
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

