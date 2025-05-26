// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSparkWarehouseBatchSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the client, which can be up to 16 characters in length. Specify a descriptive name that makes it easy to identify.
   * 
   * @example
   * DMS
   */
  agency?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-uf6485635f***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The query ID of the Spark SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * sq202501011001s****
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      agency: 'Agency',
      DBClusterId: 'DBClusterId',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agency: 'string',
      DBClusterId: 'string',
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

