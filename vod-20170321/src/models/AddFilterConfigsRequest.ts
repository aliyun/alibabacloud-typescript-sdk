// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilterConfigsRequest extends $dara.Model {
  filterName?: string;
  itemConfigs?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      filterName: 'FilterName',
      itemConfigs: 'ItemConfigs',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterName: 'string',
      itemConfigs: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

