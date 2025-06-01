// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachApplication2ConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
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
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

