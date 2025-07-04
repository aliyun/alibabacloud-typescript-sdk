// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeployGraphResponseBodyResultGraphIndexMetas } from "./GetDeployGraphResponseBodyResultGraphIndexMetas";
import { GetDeployGraphResponseBodyResultGraphOnlineMaster } from "./GetDeployGraphResponseBodyResultGraphOnlineMaster";
import { GetDeployGraphResponseBodyResultGraphTableMetas } from "./GetDeployGraphResponseBodyResultGraphTableMetas";
import { GetDeployGraphResponseBodyResultGraphZoneMetas } from "./GetDeployGraphResponseBodyResultGraphZoneMetas";


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

