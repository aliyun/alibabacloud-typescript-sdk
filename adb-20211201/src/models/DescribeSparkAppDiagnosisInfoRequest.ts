// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkAppDiagnosisInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202411061017sh0ad564b000****
   */
  appId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the information of all clusters in the specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf663j39b0jd2***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the response. Valid values: 
   * 
   * - en: English. 
   * - zh: Chinese. This is the default value.
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to view the regions and zones supported by AnalyticDB for MySQL, including region IDs.
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
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
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

