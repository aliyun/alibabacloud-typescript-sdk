// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIntegrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert integration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  integrationId?: number;
  static names(): { [key: string]: string } {
    return {
      integrationId: 'IntegrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrationId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

