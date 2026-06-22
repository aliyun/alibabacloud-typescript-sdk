// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The type of file to export. Valid values:
   * 
   * - **virusScanExport**: Exports details of a virus scan task. This parameter is required when ExportType is set to virusScanExport.
   * 
   * @example
   * virusScanExport
   */
  exportFileType?: string;
  /**
   * @remarks
   * The type of records to export. Valid values:
   * 
   * - **assetInstance**: The list of servers in Asset Center
   * 
   * - **user**: The list of account asset fingerprints
   * 
   * - **port**: The list of port asset fingerprints
   * 
   * - **process**: The list of process asset fingerprints
   * 
   * - **sca**: The list of middleware asset fingerprints
   * 
   * - **database**: The list of database asset fingerprints
   * 
   * - **web**: The list of web service asset fingerprints
   * 
   * - **software**: The list of software asset fingerprints
   * 
   * - **cron**: The list of scheduled task (cron) asset fingerprints
   * 
   * - **autorun**: The list of startup item asset fingerprints
   * 
   * - **lkm**: The list of kernel module asset fingerprints
   * 
   * - **webserver**: The list of website asset fingerprints
   * 
   * - **virusScanExport**: The list of virus scan task details
   * 
   * - **imageVulExport**: The list of system vulnerabilities in images
   * 
   * - imageVulExport: The list of system vulnerabilities in images
   * 
   * - **imageBaseLineExport**: The list of image baseline check results
   * 
   * - **imageAffectedMaliciousExport**: The list of malicious sample check results for images
   * 
   * - **baselineCspm**: The list of cloud platform configuration check results
   * 
   * - **attack**: The list of attack analysis alerts
   * 
   * - **accessKey**: The list of AK leakage detection alerts
   * 
   * - **exportObjectScanEvents**: The list of malicious file detection alerts
   * 
   * - **domainDetail**: Website assets
   * 
   * - **assetsPropertyScaProcessDetail**: RASP-protected processes
   * 
   * - **exportHcWarning**: The list of system baseline risks
   * 
   * - **raspAttackAlert**: The list of RASP attack alerts
   * 
   * - **raspApplicationConfiguration**: The list of RASP application configurations
   * 
   * - **raspWeaknessDetection**: The list of RASP weakness detection results
   * 
   * - **raspInMemoryWebshellDetection**: The list of RASP alerts for in-memory webshell detection
   * 
   * - **raspInMemoryWebshellInsertion**: The list of RASP alerts for in-memory webshell insertion
   * 
   * - **listAgentExport**: The list of agents
   * 
   * - **listSkillExport**: The list of skills
   * 
   * - **listModelExport**: The list of models
   * 
   * This parameter is required.
   * 
   * @example
   * database
   */
  exportType?: string;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The filter conditions for the exported content.
   * 
   * > This is a general-purpose operation for exporting various detection lists from Cloud Security Center. As parameter configurations vary by feature, we recommend that you omit this parameter to export the complete list. You can then filter the data in the exported Excel file.
   * 
   * @example
   * {"extend":"1","currentPage":1,"pageSize":10}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the management account for a member in Resource Directory.
   * 
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      exportFileType: 'ExportFileType',
      exportType: 'ExportType',
      lang: 'Lang',
      params: 'Params',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportFileType: 'string',
      exportType: 'string',
      lang: 'string',
      params: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

