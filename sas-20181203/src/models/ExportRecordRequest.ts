// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the file to export. Valid values:
   * 
   * *   **virusScanExport**: The details of the virus scan tasks are exported. This parameter is available and required when ExportType is set to virusScanExport.
   * 
   * @example
   * virusScanExport
   */
  exportFileType?: string;
  /**
   * @remarks
   * The type of detection result list to be exported. Values:
   * - **assetInstance**: List of servers in the asset center 
   * - **user**: List of asset fingerprints for accounts 
   * - **port**: List of asset fingerprints for ports 
   * - **process**: List of asset fingerprints for processes 
   * - **sca**: List of asset fingerprints for middleware 
   * - **database**: List of asset fingerprints for databases 
   * - **web**: List of asset fingerprints for web services 
   * - **software**: List of asset fingerprints for software 
   * - **cron**: List of asset fingerprints for scheduled tasks 
   * - **autorun**: List of asset fingerprints for startup items 
   * - **lkm**: List of asset fingerprints for kernel modules 
   * - **webserver**: List of asset fingerprints for web sites 
   * - **virusScanExport**: List of details for virus scan tasks 
   * - **imageVulExport**: List of system vulnerabilities in images 
   * - **imageBaseLineExport**: List of baseline check results in images 
   * - **imageAffectedMaliciousExport**: List of malicious sample check results in images 
   * - **baselineCspm**: List of detection results for cloud platform configuration checks 
   * - **attack**: List of alert events for attack analysis 
   * - **accessKey**: List of alert events for AK leak detection 
   * - **exportObjectScanEvents**: List of alert events for malicious file detection 
   * - **domainDetail**: Website assets 
   * - **assetsPropertyScaProcessDetail**: RASP protection process for application protection 
   * - **exportHcWarning**: List of system baseline risks 
   * - **raspAttackAlert**: List of attack alerts for Application Protection
   * - **raspApplicationConfiguration**: List of application configurations for Application Protection
   * - **raspWeaknessDetection**: List of weakness detections for Application Protection
   * - **raspInMemoryWebshellDetection**: List of in-memory webshell detection alerts for Application Protection
   * - **raspInMemoryWebshellInsertion**: List of in-memory webshell insertion alerts for Application Protection
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  exportType?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The conditions that are used to filter check results.
   * 
   * > This operation is a common export operation for multiple features of Security Center. The available configuration fields of this parameter vary based on the features. We recommend that you do not specify this parameter when you call the operation. You can export an information list without specifying this parameter, and then filter data in the exported Excel file.
   * 
   * @example
   * {"extend":"1","currentPage":1,"pageSize":10}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      exportFileType: 'ExportFileType',
      exportType: 'ExportType',
      lang: 'Lang',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportFileType: 'string',
      exportType: 'string',
      lang: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

