// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsSlsADBJobRequestUnixTimestampConvert extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the conversion of timestamps.
   * 
   * @example
   * false
   */
  convert?: string;
  /**
   * @remarks
   * The format of the timestamp.
   * 
   * @example
   * yyyyMMdd
   */
  format?: string;
  /**
   * @remarks
   * Specifies whether to enable the timestamp conversion.
   * 
   * @example
   * false
   */
  transform?: boolean;
  static names(): { [key: string]: string } {
    return {
      convert: 'Convert',
      format: 'Format',
      transform: 'Transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convert: 'string',
      format: 'string',
      transform: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

