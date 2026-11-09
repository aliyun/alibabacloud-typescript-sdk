// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMqttTicketShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client operating system.
   * 
   * This parameter is required.
   * 
   * @example
   * Windows 10
   */
  clientOS?: string;
  /**
   * @remarks
   * The client type. Valid values: 0: hardware terminal; 1: Windows software terminal; 2: macOS software terminal; 3: iOS client; 4: Android client; 5: web client; 6: tenant console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The client version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  clientVersion?: string;
  /**
   * @remarks
   * The extended properties of the client, represented as a JSON object where both keys and values are strings. Example: `{"a":"1","b":"2"}`. If this parameter is not specified, it is processed as an empty property set.
   * 
   * @example
   * {"a":"1","b":"2"}
   */
  propertiesShrink?: string;
  /**
   * @remarks
   * The device UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      propertiesShrink: 'Properties',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientOS: 'string',
      clientType: 'number',
      clientVersion: 'string',
      propertiesShrink: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

