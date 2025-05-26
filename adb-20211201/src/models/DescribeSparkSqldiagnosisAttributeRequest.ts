// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkSQLDiagnosisAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query a list of Spark application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202411071444hzdvk486d9d2001****
   */
  appId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > 
   * 
   * *   You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2zeq4788qyy7k662
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the query executed within the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  innerQueryId?: number;
  /**
   * @remarks
   * The language in which to return the query results. Valid values:
   * 
   * *   en: English.
   * *   zh: Chinese.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      innerQueryId: 'InnerQueryId',
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      innerQueryId: 'number',
      language: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

