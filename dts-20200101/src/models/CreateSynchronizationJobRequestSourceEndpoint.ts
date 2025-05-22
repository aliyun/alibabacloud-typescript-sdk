// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSynchronizationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * 
   * *   **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
   * *   **PolarDB**: PolarDB for MySQL cluster or PolarDB O Edition cluster
   * *   **Redis**: Redis database
   * *   **DRDS**: PolarDB-X instance V1.0
   * 
   * > 
   * *   Default value: **MySQL**.
   * *   For more information about the supported source and destination databases, see [Database types, initial synchronization types, and synchronization topologies](https://help.aliyun.com/document_detail/130744.html).
   * 
   * @example
   * MySQL
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

