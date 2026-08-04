// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Channel extends $dara.Model {
  /**
   * @remarks
   * Channel description.
   * 
   * @example
   * 模型输出。
   */
  description?: string;
  /**
   * @remarks
   * Channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * Model
   */
  name?: string;
  /**
   * @remarks
   * Storage configuration of the channel.
   * 
   * @example
   * {}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the channel must be configured.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * List of storage classes supported by the channel.
   */
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

