// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CrawlerTypeSupportedEntityTypes extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the entity type is optional.
   * 
   * For example, whether the schema level of the MaxCompute crawler type is optional depends on whether the three-layer model is enabled for a MaxCompute project.
   * 
   * @example
   * true
   */
  optional?: boolean;
  /**
   * @remarks
   * The subtype of the parent entity. If the subtype does not exist, null is returned.
   * 
   * @example
   * database
   */
  parentSubType?: string;
  /**
   * @remarks
   * The identifier of the entity subtype. Valid values: `catalog, database, schema, table, and column`.
   * 
   * @example
   * table
   */
  subType?: string;
  /**
   * @remarks
   * The identifier of the entity type. The value of this parameter varies based on the type of the metadata crawler. Configure this parameter in the `${Crawler type}-${Subtype}` format.
   * 
   * @example
   * dlf-table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      optional: 'Optional',
      parentSubType: 'ParentSubType',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optional: 'boolean',
      parentSubType: 'string',
      subType: 'string',
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

export class CrawlerType extends $dara.Model {
  /**
   * @remarks
   * The display name of the metadata crawler.
   * 
   * @example
   * Data Lake Formation
   */
  displayName?: string;
  /**
   * @remarks
   * The supported entity types. The entity types are sorted based on the declaration order.
   */
  supportedEntityTypes?: CrawlerTypeSupportedEntityTypes[];
  /**
   * @remarks
   * The identifier of the metadata crawler type. Valid values:
   * 
   * *   `maxcompute`
   * *   `dlf`
   * *   `hms`: This type of crawler can be used to collect metadata from E-MapReduce (EMR) and CDH Hive clusters.
   * *   `holo`
   * *   `mysql`
   * *   `oracle`
   * *   `postgresql`
   * *   `sqlserver`
   * *   `analyticdb_for_mysql`
   * *   `ads`
   * *   `hybriddb_for_postgresql`
   * *   `ots`
   * *   `clickhouse`
   * *   `starrocks`: This type of crawler can be used to query metadata entities only in internal catalogs.
   * 
   * @example
   * dlf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      supportedEntityTypes: 'SupportedEntityTypes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      supportedEntityTypes: { 'type': 'array', 'itemType': CrawlerTypeSupportedEntityTypes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEntityTypes)) {
      $dara.Model.validateArray(this.supportedEntityTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

