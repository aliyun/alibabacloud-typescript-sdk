// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Property } from "./Property";


export class CustomParams extends $dara.Model {
  /**
   * @example
   * Normalize
   */
  name?: string;
  properties?: Property[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      properties: { 'type': 'array', 'itemType': Property },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

