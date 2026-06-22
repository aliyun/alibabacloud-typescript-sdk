// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuaraFileDownloadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The source identifier of the request. Set the value to sas.
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

