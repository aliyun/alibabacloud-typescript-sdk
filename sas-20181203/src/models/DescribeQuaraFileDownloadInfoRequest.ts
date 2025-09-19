// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuaraFileDownloadInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the quarantined file.
   * 
   * > If you do not specify this parameter, you cannot call the RollbackSuspEventQuaraFile operation to restore a quarantined file. You can call the [DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~) operation to query the IDs of quarantined files.
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

