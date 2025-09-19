// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOperateVulRequest extends $dara.Model {
  /**
   * @remarks
   * The request ID. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The details of the vulnerability. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **name**: the name of the vulnerability.
   * 
   * *   **uuid**: the UUID of the server on which the vulnerability is detected.
   * 
   * *   **tag**: the tag that is added to the vulnerability. Valid values:
   * 
   *     *   **oval**: Linux software vulnerability
   *     *   **system**: Windows system vulnerability
   *     *   **cms**: Web-CMS vulnerability
   * 
   * >  You can call the [DescribeVulList](~~DescribeVulList~~) operation to query the tags that are added to vulnerabilities of other types.
   * 
   * *   **isFront**: specifies whether a pre-patch is required to fix the Windows system vulnerability. This field is required only for Windows system vulnerabilities. Valid values:
   * 
   *     *   **0**: no
   *     *   **1**: yes
   * 
   * >  You can fix multiple vulnerabilities at a time. Separate the details of multiple vulnerabilities with commas (,). You can call the [DescribeVulLIst](~~DescribeVulList~~) operation to query the details of vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"a3bb82a8-a3bd-4546-acce-45ac34af****","tag":"oval","isFront":0},{"name":"alilinux2:2.1903:ALINUX2-SA-2022:0007","uuid":"98a6fecc-88cd-46f2-8e35-f808a388****","tag":"oval","isFront":0}]
   */
  info?: string;
  /**
   * @remarks
   * The operation that you want to perform on the vulnerability. Valid values:
   * 
   * *   **vul_fix**: fixes the vulnerability.
   * *   **vul_verify**: verifies the vulnerability fix.
   * *   **vul_ignore**: ignores the vulnerability.
   * *   **vul_undo_ignore**: cancels ignoring the vulnerability.
   * *   **vul_delete**: deletes the vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * vul_fix
   */
  operateType?: string;
  /**
   * @remarks
   * The reason why the vulnerability is **ignored**.
   * 
   * >  This parameter is required only when you set **OperateType** to **vul_ignore**.
   * 
   * @example
   * not operate
   */
  reason?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * *   **app**: application vulnerability
   * *   **sca**: vulnerability that is detected based on software component analysis
   * 
   * >  You cannot fix the urgent vulnerabilities, application vulnerabilities, or vulnerabilities that are detected based on software component analysis.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      info: 'Info',
      operateType: 'OperateType',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      info: 'string',
      operateType: 'string',
      reason: 'string',
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

