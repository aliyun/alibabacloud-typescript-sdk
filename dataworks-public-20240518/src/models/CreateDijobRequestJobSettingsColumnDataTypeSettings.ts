// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestJobSettingsColumnDataTypeSettings extends $dara.Model {
  destinationDataType?: string;
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

