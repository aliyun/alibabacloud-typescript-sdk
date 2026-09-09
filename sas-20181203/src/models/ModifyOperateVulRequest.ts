// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOperateVulRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Use a different token for each request. Only ASCII characters are supported. The token can be up to 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The source identifier of the request. Set the value to **sas**.
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
   * - **uuid**: The UUID of the server on which the vulnerability is detected.
   * - **tag**: The tag of the vulnerability. Valid values:
   *     - **oval**: Linux software vulnerability.
   *     - **system**: Windows system vulnerability.
   *     - **cms**: Web-CMS vulnerability.
   * 
   * > For other vulnerability types, call the [DescribeVulList](~~DescribeVulList~~) operation to obtain the vulnerability information.
   * 
   * - **isFront**: Specifies whether the Windows patch is a prerequisite patch. This field is required only when handling Windows system vulnerabilities and can be ignored for other vulnerability types. Valid values:
   *     - **0**: No.
   *     - **1**: Yes.
   * 
   * > Batch processing of vulnerabilities is supported. Separate multiple vulnerability entries with commas (,). Call the [DescribeVulList](~~DescribeVulList~~) operation to obtain the vulnerability information.
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
   * The reason for ignoring the vulnerability.
   * > This parameter is required only when the operation type is **ignore** (OperateType is set to **vul_ignore**).
   * 
   * @example
   * not operate
   */
  reason?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of the vulnerability to handle. Valid values:
   * - **cve**: Linux software vulnerability.
   * - **sys**: Windows system vulnerability.
   * - **cms**: Web-CMS vulnerability.
   * - **emg**: emergency vulnerability.
   * - **app**: application vulnerability.
   * - **sca**: software constituency parsing vulnerability.
   * 
   * > Emergency vulnerabilities (emg), application vulnerabilities (app), and software constituency parsing vulnerabilities (sca) do not support the execute vulnerability fix operation.
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

