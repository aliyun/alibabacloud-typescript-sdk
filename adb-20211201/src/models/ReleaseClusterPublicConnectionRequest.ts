// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseClusterPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition.
   * <props="intl">The cluster ID of the Data Lakehouse Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * - **Clickhouse**: the wide-table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

