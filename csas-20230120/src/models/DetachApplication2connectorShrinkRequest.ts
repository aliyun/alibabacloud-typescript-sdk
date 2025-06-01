// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachApplication2ConnectorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * ConnectorID。
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

