// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuaraFileDownloadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the request source. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the quarantined file.
   * 
   * > If you do not specify this parameter, calling the RollbackSuspEventQuaraFile operation does not cancel the quarantine of the file in the quarantine box, which means the call does not take effect. Call the [DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~) operation to obtain the quarantined file ID (the value of the Id parameter).
   * 
   * QuaraFileId depends on the following prerequisite chain: (1) The SAS Agent must be installed on the ECS instance and be online. (2) The Agent must detect a malicious file and generate a security alert. (3) The alert must be quarantined by calling the HandleSecurityEvents operation (OperationCode=quara). (4) Call the DescribeSuspEventQuaraFiles operation to obtain the QuaraFileId.
   * 
   * Note: This parameter is actually required. If it is not provided, the API returns error code -101 (400) with the message "The ID of the file to be rolled back is not provided".
   * 
   * @example
   * 123
   */
  quaraFileId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      quaraFileId: 'QuaraFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      quaraFileId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

