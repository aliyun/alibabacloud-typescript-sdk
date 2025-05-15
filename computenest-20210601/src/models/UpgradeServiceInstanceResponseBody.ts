// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters required for the upgrade. This parameter is returned only if DryRun is set to true in the request. You can specify the required parameters based on the returned value when you perform an actual request.
   */
  upgradeRequiredParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      upgradeRequiredParameters: 'UpgradeRequiredParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      upgradeRequiredParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.upgradeRequiredParameters)) {
      $dara.Model.validateArray(this.upgradeRequiredParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

