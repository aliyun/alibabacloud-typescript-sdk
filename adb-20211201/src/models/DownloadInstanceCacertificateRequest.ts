// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadInstanceCACertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9842849v6****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
      ownerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

