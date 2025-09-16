// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeployGraphResponseBodyResultGraphIndexMetas extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2409
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  tableName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tableName: 'tableName',
      tag: 'tag',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tableName: 'string',
      tag: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphOnlineMaster extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 5377
   */
  hippoId?: string;
  /**
   * @remarks
   * The ID of the data center.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the online cluster.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'domainName',
      hippoId: 'hippoId',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      hippoId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphTableMetas extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * 1
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The deployment ID of the table.
   * 
   * @example
   * 2177
   */
  tableDeployId?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      domainName: 'domainName',
      name: 'name',
      tableDeployId: 'tableDeployId',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      domainName: 'string',
      name: 'string',
      tableDeployId: 'number',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraphZoneMetas extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * hz_pre_vpc_domain_1
   */
  domainInfo?: string;
  /**
   * @remarks
   * The name of the Query Result Searcher (QRS) worker.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
   */
  name?: string;
  /**
   * @remarks
   * The name of the service that is used to manage the relationships between online clusters and indexes.
   * 
   * @example
   * ha-cn-pl32rf0****_hz_pre_vpc_domain_1
   */
  suezAdminName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs_hz_pre_vpc_domain_1
   */
  tag?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * qrs
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
      name: 'name',
      suezAdminName: 'suezAdminName',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: 'string',
      name: 'string',
      suezAdminName: 'string',
      tag: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResultGraph extends $dara.Model {
  /**
   * @remarks
   * The index metadata.
   */
  indexMetas?: GetDeployGraphResponseBodyResultGraphIndexMetas[];
  /**
   * @remarks
   * The metadata of online clusters.
   */
  onlineMaster?: GetDeployGraphResponseBodyResultGraphOnlineMaster[];
  /**
   * @remarks
   * The association relationships between data sources and indexes.
   */
  tableIndexRelation?: { [key: string]: string[] };
  /**
   * @remarks
   * The metadata of data sources.
   */
  tableMetas?: GetDeployGraphResponseBodyResultGraphTableMetas[];
  /**
   * @remarks
   * The association relationships between zones and indexes.
   */
  zoneIndexRelation?: { [key: string]: string[] };
  /**
   * @remarks
   * The zone metadata.
   */
  zoneMetas?: GetDeployGraphResponseBodyResultGraphZoneMetas[];
  static names(): { [key: string]: string } {
    return {
      indexMetas: 'indexMetas',
      onlineMaster: 'onlineMaster',
      tableIndexRelation: 'tableIndexRelation',
      tableMetas: 'tableMetas',
      zoneIndexRelation: 'zoneIndexRelation',
      zoneMetas: 'zoneMetas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphIndexMetas },
      onlineMaster: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphOnlineMaster },
      tableIndexRelation: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      tableMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphTableMetas },
      zoneIndexRelation: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      zoneMetas: { 'type': 'array', 'itemType': GetDeployGraphResponseBodyResultGraphZoneMetas },
    };
  }

  validate() {
    if(Array.isArray(this.indexMetas)) {
      $dara.Model.validateArray(this.indexMetas);
    }
    if(Array.isArray(this.onlineMaster)) {
      $dara.Model.validateArray(this.onlineMaster);
    }
    if(this.tableIndexRelation) {
      $dara.Model.validateMap(this.tableIndexRelation);
    }
    if(Array.isArray(this.tableMetas)) {
      $dara.Model.validateArray(this.tableMetas);
    }
    if(this.zoneIndexRelation) {
      $dara.Model.validateMap(this.zoneIndexRelation);
    }
    if(Array.isArray(this.zoneMetas)) {
      $dara.Model.validateArray(this.zoneMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The deployment information.
   */
  graph?: GetDeployGraphResponseBodyResultGraph;
  static names(): { [key: string]: string } {
    return {
      graph: 'graph',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graph: GetDeployGraphResponseBodyResultGraph,
    };
  }

  validate() {
    if(this.graph && typeof (this.graph as any).validate === 'function') {
      (this.graph as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeployGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   * 
   * @example
   * {}
   */
  result?: GetDeployGraphResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDeployGraphResponseBodyResult,
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

