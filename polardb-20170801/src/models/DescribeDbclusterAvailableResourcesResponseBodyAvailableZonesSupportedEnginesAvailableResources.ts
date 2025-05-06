// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources extends $dara.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Normal**: Cluster Edition.
   * *   **Basic**: Single Node Edition.
   * *   **ArchiveNormal**: X-Engine.
   * *   **NormalMultimaster**: Multi-master Cluster (Database/Table) Edition.
   * *   **SENormal**: Standard Edition.
   * 
   * >- Only PolarDB for MySQL supports Single Node Edition.
   * >- Only PolarDB for MySQL 8.0 supports X-Engine Edition and Multi-master Cluster (Database/Table) Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      DBNodeClass: 'DBNodeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      DBNodeClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

