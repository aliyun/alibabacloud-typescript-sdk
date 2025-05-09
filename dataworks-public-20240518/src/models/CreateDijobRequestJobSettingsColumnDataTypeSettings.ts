// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
  /**
   * @remarks
   * The data type of the destination field. Valid values: bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Different types of data sources support different data types.
   * 
   * @example
   * text
   */
  destinationDataType?: string;
  /**
   * @remarks
   * The data type of the source field. Valid values: Valid values: bigint, boolean, string, text, datetime, timestamp, decimal, and binary. Different types of data sources support different data types.
   * 
   * @example
   * bigint
   */
  sourceDataType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDataType: 'DestinationDataType',
      sourceDataType: 'SourceDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDataType: 'string',
      sourceDataType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

