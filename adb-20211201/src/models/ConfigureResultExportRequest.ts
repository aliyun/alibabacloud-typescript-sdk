// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureResultExportRequestOssInfo extends $dara.Model {
  /**
   * @remarks
   * The OSS path where the result sets are stored.
   * 
   * @example
   * oss://testBucketName/data_result
   */
  exportBasePath?: string;
  /**
   * @remarks
   * The name of the resource group that runs the job.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The expiration time of the OSS file. Unit: days. Minimum: 1 day, maximum: 30 days. Values outside this range will result in an error.
   * 
   * @example
   * 10
   */
  resultFileTtl?: number;
  static names(): { [key: string]: string } {
    return {
      exportBasePath: 'ExportBasePath',
      resourceGroup: 'ResourceGroup',
      resultFileTtl: 'ResultFileTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportBasePath: 'string',
      resourceGroup: 'string',
      resultFileTtl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureResultExportRequestSlsInfo extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the Logstore temporarily generated during the result set export. Unit: days. The Logstore is automatically deleted after it expires. Minimum value: 1 day, maximum: 30 days. Values outside this range will result in an error.
   * 
   * @example
   * 10
   */
  logstoreTtl?: number;
  /**
   * @remarks
   * The name of the resource group that runs the job.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * test-project
   */
  slsProject?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreTtl: 'LogstoreTtl',
      resourceGroup: 'ResourceGroup',
      slsProject: 'SlsProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreTtl: 'number',
      resourceGroup: 'string',
      slsProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureResultExportRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * *   SLS: Specifies that the export destination is SLS.
   * *   OSS: Specifies that the export destination is OSS.
   * 
   * @example
   * SLS
   */
  exportType?: string;
  /**
   * @remarks
   * The OSS configuration details if the destination is of the OSS type.
   */
  ossInfo?: ConfigureResultExportRequestOssInfo;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The SLS configuration details if the destination is of the SLS type.
   */
  slsInfo?: ConfigureResultExportRequestSlsInfo;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      exportType: 'ExportType',
      ossInfo: 'OssInfo',
      regionId: 'RegionId',
      slsInfo: 'SlsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      exportType: 'string',
      ossInfo: ConfigureResultExportRequestOssInfo,
      regionId: 'string',
      slsInfo: ConfigureResultExportRequestSlsInfo,
    };
  }

  validate() {
    if(this.ossInfo && typeof (this.ossInfo as any).validate === 'function') {
      (this.ossInfo as any).validate();
    }
    if(this.slsInfo && typeof (this.slsInfo as any).validate === 'function') {
      (this.slsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

