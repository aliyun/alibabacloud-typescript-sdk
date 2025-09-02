// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDISyncTaskConfigProcessResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the parameters fail to be obtained. If the parameters are obtained, the value null is returned.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the parameters are obtained. Valid values:
   * 
   * *   success: The parameters are obtained.
   * *   fail: The parameters fail to be obtained. You can view the reason for the failure and troubleshoot the issue based on the reason.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The parameters that are obtained. The parameters are used as the request parameters of the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) or [UpdateDISyncTask](https://help.aliyun.com/document_detail/289109.html) operation to create or update a real-time synchronization task in Data Integration.
   * 
   * @example
   * {"extend":{"mode":"migration_holo","resourceGroup":"280749","name":"h"},"type":"job","steps":[{"stepType":"mysql","parameter":{"connection":[{"datasourceType":"mysql","datasource":"mm","selectedTables":[{"schema":[{"tableInfos":[{"enable":true,"table":"m_v1","tableName":"m_v1"}]}],"dbName":"m"}]}]},"name":"reader","category":"reader"},{"stepType":"holo","parameter":{"datasource":"h","tableMappingRule":{"datasource":[{"tableRule":[{"srcTable":"m_v1","mergeIntoCycleType":"DEFAULT","hourDeltaEnable":false,"dstTable":"m.m_v1","dayDeltaEnable":false,"primaryKeyInfo":{"column":["id"],"type":"pk"},"dstCreateTableInfo":{"indexType":"m_v1","dataColumn":[{"columnSize":0,"name":"id","index":0,"comment":"","newDigit":0,"type":"int8","digit":0,"primaryKey":true}],"schemaName":"m","tableName":"m_v1"},"srcDbName":"m"],"srcDatasourceName":"mm"}],"totalTableMapping":1},"writeMode":"replay"},"name":"writer","category":"writer"}],"version":"2.0","order":{"hops":[{"from":"reader","to":"writer"}]}}
   */
  taskContent?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
      taskContent: 'TaskContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
      taskContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDISyncTaskConfigProcessResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned for the parameters that are asynchronously generated and used to create or update a real-time synchronization task in Data Integration.
   */
  data?: QueryDISyncTaskConfigProcessResultResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryDISyncTaskConfigProcessResultResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

