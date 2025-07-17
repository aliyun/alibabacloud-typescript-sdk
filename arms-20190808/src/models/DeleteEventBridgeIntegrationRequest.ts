// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventBridgeIntegrationRequest extends $dara.Model {
  /**
   * @remarks
   * Required. The ID of the EventBridge notification integration. You can call the **ListEventBridgeIntegrations** operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

