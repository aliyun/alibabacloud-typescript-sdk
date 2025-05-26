// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KeyValuePair } from "./KeyValuePair";


export class Row extends $dara.Model {
  customLabels?: KeyValuePair[];
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'CustomLabels',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'array', 'itemType': KeyValuePair },
      URI: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customLabels)) {
      $dara.Model.validateArray(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

