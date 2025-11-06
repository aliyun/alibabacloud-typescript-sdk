// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataSource } from "./DataSource";


export class ClusterSpec extends $dara.Model {
  clusterType?: string;
  dataSources?: DataSource[];
  image?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      dataSources: 'DataSources',
      image: 'Image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      dataSources: { 'type': 'array', 'itemType': DataSource },
      image: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

