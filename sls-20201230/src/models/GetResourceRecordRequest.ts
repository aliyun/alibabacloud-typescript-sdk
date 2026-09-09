// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow retrieving system built-in records.
   * 
   * @example
   * false
   */
  includeSystemRecords?: boolean;
  static names(): { [key: string]: string } {
    return {
      includeSystemRecords: 'includeSystemRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeSystemRecords: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

