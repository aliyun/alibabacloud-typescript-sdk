// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes } from "./GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes";


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam extends $dara.Model {
  /**
   * @remarks
   * The type of the archiving destination.
   * 
   * @example
   * inner_oss
   */
  archiveMethod?: string;
  /**
   * @remarks
   * The schema of the database and table to be archived.
   * 
   * @example
   * test
   */
  dbSchema?: string;
  /**
   * @remarks
   * Indicates whether the database is logical.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The post behavior of archiving.
   */
  orderAfter?: string[];
  /**
   * @remarks
   * The running method, which indicates whether to run the task immediately or at a specific point in time.
   * 
   * @example
   * now
   */
  runMethod?: string;
  /**
   * @remarks
   * The ID of the source database.
   * 
   * @example
   * 12***
   */
  sourceDatabaseId?: number;
  /**
   * @remarks
   * The list of the archived tables and the filter conditions.
   */
  tableIncludes?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes[];
  /**
   * @remarks
   * The mapping of schemas.
   */
  tableMapping?: string[];
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * 12***
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The time variable defined for scheduled archiving.
   */
  variables?: string[];
  static names(): { [key: string]: string } {
    return {
      archiveMethod: 'ArchiveMethod',
      dbSchema: 'DbSchema',
      logic: 'Logic',
      orderAfter: 'OrderAfter',
      runMethod: 'RunMethod',
      sourceDatabaseId: 'SourceDatabaseId',
      tableIncludes: 'TableIncludes',
      tableMapping: 'TableMapping',
      targetInstanceId: 'TargetInstanceId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveMethod: 'string',
      dbSchema: 'string',
      logic: 'boolean',
      orderAfter: { 'type': 'array', 'itemType': 'string' },
      runMethod: 'string',
      sourceDatabaseId: 'number',
      tableIncludes: { 'type': 'array', 'itemType': GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes },
      tableMapping: { 'type': 'array', 'itemType': 'string' },
      targetInstanceId: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.orderAfter)) {
      $dara.Model.validateArray(this.orderAfter);
    }
    if(Array.isArray(this.tableIncludes)) {
      $dara.Model.validateArray(this.tableIncludes);
    }
    if(Array.isArray(this.tableMapping)) {
      $dara.Model.validateArray(this.tableMapping);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

