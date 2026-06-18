// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReportNodesStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * dwd_mysql_lingwan_faxing_login_di
   */
  description?: string;
  /**
   * @remarks
   * The end time of the node issue. The time is in the ISO 8601 format \\`yyyy-MM-ddTHH:mm:ss+0800\\` and includes the time zone.
   * 
   * @example
   * 2024-07-10T10:17:06
   */
  endTime?: string;
  /**
   * @remarks
   * The category of the issue. This parameter is required when \\`Reason\\` is set to \\`HardwareError\\`. Valid values:<br>
   * ● hardware-cpu-error: CPU failure<br>
   * ● hardware-gpu-error: GPU failure<br>
   * ● hardware-motherboard-error: Motherboard failure<br>
   * ● hardware-mem-error: Memory failure<br>
   * ● hardware-power-error: Power supply failure<br>
   * ● hardware-disk-error: Disk failure
   * ● hardware-networkcard-error: Network interface card failure<br>
   * ● hardware-fan-error: Fan failure<br>
   * ● hardware-cable-error: Network cable failure<br>
   * ● others: Other<br><br><br><br><br><br><br><br><br>
   * 
   * @example
   * hardware-disk-error
   */
  issueCategory?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodesShrink?: string;
  /**
   * @remarks
   * The impact of the issue on the Lingjun node.
   * Valid values:
   * ● HardwareError: A hardware error occurred.
   * ● SoftwareError: A software error occurred.
   * ● NetworkError: A network error occurred.
   * ● Others: Other issues. If none of the preceding values apply, set this parameter to \\`Others\\` and provide details in the \\`Description\\` parameter.
   * 
   * @example
   * SoftwareError
   */
  reason?: string;
  /**
   * @remarks
   * The start time of the node issue. The time is in the ISO 8601 format \\`yyyy-MM-ddTHH:mm:ss+0800\\` and includes the time zone.
   * 
   * @example
   * 2024-09-22T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      issueCategory: 'IssueCategory',
      nodesShrink: 'Nodes',
      reason: 'Reason',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      issueCategory: 'string',
      nodesShrink: 'string',
      reason: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

