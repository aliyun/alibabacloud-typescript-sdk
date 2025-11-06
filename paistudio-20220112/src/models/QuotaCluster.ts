// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSource } from "./DataSource";


export class QuotaCluster extends $dara.Model {
  clusterType?: string;
  dataSources?: DataSource[];
  endpoints?: { [key: string]: string };
  image?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      dataSources: 'DataSources',
      endpoints: 'Endpoints',
      image: 'Image',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      dataSources: { 'type': 'array', 'itemType': DataSource },
      endpoints: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      image: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.endpoints) {
      $dara.Model.validateMap(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

