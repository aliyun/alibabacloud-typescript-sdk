// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the linked entry. Currently supported values:
   * logCorrelation: indicates application log association.
   * 
   * This parameter is required.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      recordType: 'recordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

