// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIJobRequestSourceDataSourceSettingsDataSourceProperties extends $dara.Model {
  encoding?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      encoding: 'Encoding',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encoding: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

