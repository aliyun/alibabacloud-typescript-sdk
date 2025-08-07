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

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
  /**
   * @remarks
   * The available resources.
   */
  availableResources?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources[];
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * mysql57
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources },
      engine: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The database engines that the available resources support.
   */
  supportedEngines?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines[];
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngines)) {
      $dara.Model.validateArray(this.supportedEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAvailableResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available zones of the cluster.
   */
  availableZones?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2B19F698-8FFC-4918-B9E2-58D878******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

