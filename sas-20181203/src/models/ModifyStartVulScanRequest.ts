// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStartVulScanRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * - true: performs only a dry run without performing the actual operation.
   * - false: performs the actual request.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Settings for the vulnerability types to be detected by the one-click scan feature. Valid values:
   * - **cve**: Linux software vulnerability.
   * - **sys**: Windows system vulnerability.
   * - **cms**: Web-CMS vulnerability.
   * - **app**: Application vulnerability detected by the web scanner.
   * - **emg**: Emergency vulnerability.
   * - **image**: Container image vulnerability.
   * - **sca**: Application vulnerability detected by software constituency parsing.
   * > If this parameter is left empty, all vulnerability types are detected.
   * 
   * @example
   * "cve,sys,cms,app,emg"
   */
  types?: string;
  /**
   * @remarks
   * The list of server UUIDs. Separate multiple UUIDs with commas (,).
   * 
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/421726.html) operation to obtain this parameter.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceDirectoryAccountId: 'number',
      types: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

