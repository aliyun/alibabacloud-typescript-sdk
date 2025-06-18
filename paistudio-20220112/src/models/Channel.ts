// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Channel extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  properties?: { [key: string]: any };
  required?: boolean;
  supportedChannelTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      properties: 'Properties',
      required: 'Required',
      supportedChannelTypes: 'SupportedChannelTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      required: 'boolean',
      supportedChannelTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.supportedChannelTypes)) {
      $dara.Model.validateArray(this.supportedChannelTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

