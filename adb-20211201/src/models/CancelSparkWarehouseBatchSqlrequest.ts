// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSparkWarehouseBatchSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The client name for auxiliary recording. The value is a meaningful string of up to 16 characters.
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
   * The execution ID of the Spark SQL.
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

