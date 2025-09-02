// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDataRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters that you can configure to query the access records. Valid values:
   * 
   * *   dbType
   * *   instanceName
   * *   databaseName
   * *   projectName
   * *   clusterName
   * 
   * The sample value shows the parameters configured to query the access records of the sensitive data in the abc database of the Hologres instance ABC. You must configure the parameters based on the compute engine that you use in your business.
   * 
   * This parameter is required.
   * 
   * @example
   * [ {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"}, {"dbType":"ODPS.ODPS","projectName":"adbc"} ]
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

