// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetServiceSettingsResponseBodyServiceSettings } from "./SetServiceSettingsResponseBodyServiceSettings";


export class SetServiceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBEC8072-BEC2-478E-8EAE-E723BA79CF19
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: SetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': SetServiceSettingsResponseBodyServiceSettings },
    };
  }

  validate() {
    if(Array.isArray(this.serviceSettings)) {
      $dara.Model.validateArray(this.serviceSettings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

