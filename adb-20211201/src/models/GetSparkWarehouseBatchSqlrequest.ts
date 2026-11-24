// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkWarehouseBatchSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The client name used for logging. This is a meaningful string up to 16 characters in length.
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
   * The Spark SQL execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sq2024123*****
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

