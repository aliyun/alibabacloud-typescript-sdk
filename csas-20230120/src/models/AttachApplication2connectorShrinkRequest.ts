// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplication2ConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The set of private access application IDs. The number of private access applications that can be attached to a single Connector cannot exceed the total number of private access applications.
   * 
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * The Connector ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdsShrink: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdsShrink: 'string',
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

