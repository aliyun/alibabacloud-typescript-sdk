// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDatasetDetailInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC4E1E63-B337-44F8-8C22-6F00DF67E2C3
   */
  requestId?: string;
  /**
   * @remarks
   * The dataset data returned in JSON format:
   * `{ "cube": { "dimensions": [ { "caption": "Customer name", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "customer_name", "uid": "N5820f5_customer_name" }, { "caption": "Order number", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "order_id", "uid": "N5820f5_order_id" } ], "measures": [ { "caption": "Order amount", "dataType": "number", "factColumn": "order_amt", "measureType": "standard_measure", "uid": "N5820f5_order_amt" } ], "table": { "customsql": false, "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "tableName": "company_sales_record_copy" } }, "datasetId": "5820f58c-c734-4d8a-baf1-7979af4f****", "datasetName": "company_sales_record_copy12", "datasource": { "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "dsName": "Lisan personal use", "dsType": "mysql" }, "directory": { "id": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "name": "My datasets", "pathId": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "pathName": "My datasets" }, "ownerId": "13651626232****", "ownerName": "Zhang San", "rowLevel": false, "workspaceId": "95296e95-ca89-4c7d-8af9-dedf0ad0****", "workspaceName": "Test workspace" }`
   * 
   * @example
   * The dataset data returned in JSON format. For more information, see the description on the left
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the API operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * - false: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

