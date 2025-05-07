// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTDEResponseBodyDatabases } from "./DescribeDbinstanceTderesponseBodyDatabases";


export class DescribeDBInstanceTDEResponseBody extends $dara.Model {
  /**
   * @remarks
   * The TDE status at the database level.
   * 
   * >  If your instance runs SQL Server 2019 SE or SQL Server EE, you can specify whether to enable TDE at the database level when you enable TDE at the instance level.
   */
  databases?: DescribeDBInstanceTDEResponseBodyDatabases;
  /**
   * @remarks
   * The ID of the custom key.
   * 
   * @example
   * 749c1df7-****-****-****-****
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  /**
   * @remarks
   * The method that is used to generate the key for TDE at the instance level. Valid values:
   * 
   * *   **Aliyun_Generate_Key**
   * *   **Customer_Provided_Key**
   * *   **Unknown**
   * 
   * @example
   * Aliyun_Generate_Key
   */
  TDEMode?: string;
  /**
   * @remarks
   * The TDE status of the instance. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      encryptionKey: 'EncryptionKey',
      requestId: 'RequestId',
      TDEMode: 'TDEMode',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDBInstanceTDEResponseBodyDatabases,
      encryptionKey: 'string',
      requestId: 'string',
      TDEMode: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    if(this.databases && typeof (this.databases as any).validate === 'function') {
      (this.databases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

