// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFCTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event. You can specify only one name.
   * 
   * This parameter is required.
   * 
   * @example
   * LogFileCreated
   */
  eventMetaName?: string;
  /**
   * @remarks
   * The version number of the event. You can specify only one version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  eventMetaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      eventMetaName: 'EventMetaName',
      eventMetaVersion: 'EventMetaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventMetaName: 'string',
      eventMetaVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

