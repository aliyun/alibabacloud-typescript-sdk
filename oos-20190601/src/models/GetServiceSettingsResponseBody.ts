// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceSettingsResponseBodyServiceSettings } from "./GetServiceSettingsResponseBodyServiceSettings";


export class GetServiceSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9F755DC9-C0CF-4598-B2E3-2CC763F18CB2
   */
  requestId?: string;
  /**
   * @remarks
   * The information of service settings.
   */
  serviceSettings?: GetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': GetServiceSettingsResponseBodyServiceSettings },
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

