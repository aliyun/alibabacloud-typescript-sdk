// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCorrectOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The database ID. The database can be a physical database or a logical database.
   * 
   * *   To query the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To query the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * The instance ID. You can call the ListInstances or GetInstance operation to query the instance ID.
   * 
   * > 
   * > The instance change feature is supported only by ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and AnalyticDB for MySQL clusters.
   * 
   * @example
   * 1860****
   */
  instanceId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

