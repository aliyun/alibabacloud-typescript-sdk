// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters } from "./DescribeGlobalDatabaseNetworksResponseBodyItemsDbclusters";
import { DescribeGlobalDatabaseNetworksResponseBodyItemsLabels } from "./DescribeGlobalDatabaseNetworksResponseBodyItemsLabels";


export class DescribeGlobalDatabaseNetworksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the GDN was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2020-03-23T05:46:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * Details about clusters in the GDN.
   */
  DBClusters?: DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters[];
  /**
   * @remarks
   * The type of the database engine. Only **MySQL** is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. Only the **8.0** version is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must start with a letter.
   * *   It can contain letters, digits, underscores (_), and hyphens (-).
   * *   It must be 2 to 126 characters in length.
   * 
   * @example
   * test
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The ID of the GDN.
   * 
   * @example
   * gdn-****************
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * *   **Creating**: The GDN is being created.
   * *   **active**: The GDN is running.
   * *   **deleting**: The GDN is being deleted.
   * *   **locked**: The GDN is locked. If the GDN is locked, you cannot perform operations on clusters in the GDN.
   * *   **removing_member**: The secondary cluster is being removed from the GDN.
   * 
   * @example
   * active
   */
  GDNStatus?: string;
  labels?: DescribeGlobalDatabaseNetworksResponseBodyItemsLabels;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworksResponseBodyItemsDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
      labels: DescribeGlobalDatabaseNetworksResponseBodyItemsLabels,
    };
  }

  validate() {
    if(Array.isArray(this.DBClusters)) {
      $dara.Model.validateArray(this.DBClusters);
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

