// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOperateVulRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure request idempotence. Use a different token for each request. Only ASCII characters are supported. The value can be up to 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values: true: performs only a dry run without executing the actual operation. false: sends the request normally. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The source identifier of the request. Set this parameter to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The information about the vulnerability to handle. This parameter is in JSON format and contains the following fields:
   * 
   * - **name**: The name of the vulnerability.
   * - **uuid**: The UUID of the server that has the vulnerability.
   * - **tag**: The label of the vulnerability. Valid values:
   *     - **oval**: Linux software vulnerability
   *     - **system**: Windows system vulnerability
   *     - **cms**: Web-CMS vulnerability
   * 
   * > For other vulnerability types, call the [DescribeVulList](~~DescribeVulList~~) operation to obtain vulnerability information.
   * 
   * - **isFront**: Specifies whether the Windows patch is a prerequisite patch. Set this parameter only when handling Windows system vulnerabilities. You can ignore this parameter for other vulnerability types. Valid values:
   *     - **0**: No.
   *     - **1**: Yes.
   * 
   * > Batch processing is supported. Separate multiple vulnerability entries with commas (,). Call the [DescribeVulList](~~DescribeVulList~~) operation to obtain vulnerability information.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"a3bb82a8-a3bd-4546-acce-45ac34af****","tag":"oval","isFront":0},{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"98a6fecc-88cd-46f2-8e35-f808a388****","tag":"oval","isFront":0}]
   */
  info?: string;
  /**
   * @remarks
   * The operation to perform on the vulnerability. Valid values:
   * - **vul_fix**: Fix the vulnerability.
   * - **vul_verify**: Verify the vulnerability.
   * - **vul_ignore**: Ignore the vulnerability.
   * - **vul_undo_ignore**: Cancel ignoring the vulnerability.
   * - **vul_delete**: Delete the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The reason for ignoring the vulnerability. This parameter is required only when the operation is set to **ignore** (that is, **OperateType** is set to **vul_ignore**).
   * 
   * @example
   * not operate
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account associated with a member account in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of vulnerability to handle. Valid values:
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **emg**: Emergency vulnerability
   * - **app**: Application vulnerability
   * - **sca**: Software constituency parsing vulnerability
   * 
   * > Fix operations are not supported for emergency vulnerabilities (emg), application vulnerabilities (app), or software constituency parsing vulnerabilities (sca). These vulnerability types do not support the execute vulnerability fix operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      from: 'From',
      info: 'Info',
      operateType: 'OperateType',
      reason: 'Reason',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      from: 'string',
      info: 'string',
      operateType: 'string',
      reason: 'string',
      resourceDirectoryAccountId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

