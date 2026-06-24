// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDynamicSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotency of the request.
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   */
  regionId?: string;
  /**
   * @remarks
   * The request body, which contains the dynamic settings to be updated.
   */
  body?: string;
  /**
   * @remarks
   * The update mode for the dynamic settings.
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      body: 'body',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      body: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

