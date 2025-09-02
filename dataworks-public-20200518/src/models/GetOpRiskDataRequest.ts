// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpRiskDataRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which access records were generated. Specify the value in the yyyyMMdd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 20210221
   */
  date?: string;
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
   * The following example shows the parameters configured to query the access records of the sensitive data in the abc database of the Hologres instance ABC: [ {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"} ]
   * 
   * You must configure the parameters based on the compute engine that you use in your business.
   * 
   * @example
   * [ {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"}, {"dbType":"ODPS.ODPS","projectName":"adbc"} ]
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The method that you use to identify risks.
   * 
   * *   You can manually identify risks.
   * *   You can also use a sensitive data identification rule to identify risks. You can log on to the DataWorks console and go to the Risk Identification Rules page in Data Security Guard to obtain the name of the rule.
   * 
   * @example
   * Manual identification
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      riskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

