// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackSuspEventQuaraFileRequest extends $dara.Model {
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
   * > If you do not configure this parameter, you cannot call the RollbackSuspEventQuaraFile operation to restore a quarantined file. You can call the [DescribeSuspEventQuaraFiles](~~DescribeSuspEventQuaraFiles~~) operation to query the IDs of quarantined files.
   * 
   * @example
   * 3921797
   */
  quaraFileId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.3.4
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      quaraFileId: 'QuaraFileId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      quaraFileId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

