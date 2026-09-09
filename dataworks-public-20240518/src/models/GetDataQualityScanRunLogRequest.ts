// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityScanRunLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring run record.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The start position of the log, which is the offset relative to the beginning of the file. Unit: bytes. Each query returns a maximum of 512 KB of content.
   * 
   * @example
   * 200
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      offset: 'Offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

