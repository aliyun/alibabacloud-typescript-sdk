// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 2546
   */
  checkId?: number;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   **hc.check.type.identity_auth**: identity authentication
   * *   **hc.check.type.access_control**: access control
   * *   **hc.check.type.network_service**: network and service
   * *   **hc.check.type.service_conf**: service configuration
   * *   **hc.check.type.file_rights**: file permission
   * *   **hc.check.type.security_audit**: security audit
   * *   **hc.check.type.attack_defense**: intrusion prevention
   * *   **hc.check.type.others**: others
   * 
   * @example
   * hc.check.type.attack_defense
   */
  checkType?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * /redis
   */
  containerName?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  To obtain the Alibaba Cloud account ID, call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The ID of the risk item. This parameter is required.
   * 
   * >  To query the information about the risk items and check items of a server, you must specify the IDs of the risk items. You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the IDs of risk items.
   * 
   * @example
   * 10354
   */
  riskId?: number;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   **1**: failed
   * *   **2**: verifying
   * *   **3**: passed
   * *   **5**: expired
   * *   **6**: ignored
   * 
   * @example
   * 1
   */
  riskStatus?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The UUID of the server on which the baseline check is performed.
   * 
   * > To query specified risk items and the check items of a specified server, you must provide the ID of the server on which the baseline check is performed. You can call the [DescribeWarningMachines](~~DescribeWarningMachines~~) operation to query the IDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * d42f938c-d962-48a0-90f9-05****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkType: 'CheckType',
      containerName: 'ContainerName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskId: 'RiskId',
      riskStatus: 'RiskStatus',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkType: 'string',
      containerName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
      riskId: 'number',
      riskStatus: 'number',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

