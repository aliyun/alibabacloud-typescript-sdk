// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The request source identifier.
   * 
   * Set this parameter to **sas**, which indicates a request from the Security Center client.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The operation to perform on the alert. Valid values:
   * 
   * - **deal**: handles the alert (quarantine).
   * - **ignore**: ignores the alert.
   * - **mark_mis_info**: marks the alert as a false positive (adds it to the whitelist).
   * - **rm_mark_mis_info**: unmarks the alert as a false positive (removes it from the whitelist).
   * - **offline_handled**: marks the alert as handled.
   * 
   * This parameter is required.
   * 
   * @example
   * deal
   */
  operation?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The sub-operation type to perform when quarantining the alert event. Valid values:
   * 
   * - **killAndQuaraFileByPidAndMd5andPath**: terminates the process by PID and quarantines the source file of the process.
   * - **quaraFileByMd5andPath**: quarantines the source file of the process.
   * - **killAndQuaraFileByMd5andPath**: terminates the process and quarantines the source file of the process.
   * 
   * @example
   * killAndQuaraFileByPidAndMd5andPath
   */
  subOperation?: string;
  /**
   * @remarks
   * The list of alert event IDs.
   * 
   * > You can call [DescribeSuspEvents](~~DescribeSuspEvents~~) to obtain alert event IDs from the SecurityEventIds response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 290852
   */
  suspiciousEventIds?: string;
  /**
   * @remarks
   * The type of the exception event to handle. Valid values:
   * 
   * - **alarm**: alert.
   * - **Empty**: exception.
   * 
   * @example
   * alarm
   */
  warnType?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      operation: 'Operation',
      sourceIp: 'SourceIp',
      subOperation: 'SubOperation',
      suspiciousEventIds: 'SuspiciousEventIds',
      warnType: 'WarnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      operation: 'string',
      sourceIp: 'string',
      subOperation: 'string',
      suspiciousEventIds: 'string',
      warnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

