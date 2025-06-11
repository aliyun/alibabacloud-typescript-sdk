// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceStatusResponseBodyServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 151266687691****
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether you have the permissions to enable CloudSSO. Valid values:
   * 
   * *   Success: You have the permissions to enable CloudSSO.
   * *   Failed: You do not have the permissions to enable CloudSSO.
   * 
   * >  The value of this parameter is returned only if the value of `Status` is `Disabled`.
   * 
   * @example
   * Success
   */
  prerequisiteCheckResult?: string;
  /**
   * @remarks
   * The region IDs.
   */
  regionsInUse?: string[];
  /**
   * @remarks
   * Indicates whether CloudSSO is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      prerequisiteCheckResult: 'PrerequisiteCheckResult',
      regionsInUse: 'RegionsInUse',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      prerequisiteCheckResult: 'string',
      regionsInUse: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regionsInUse)) {
      $dara.Model.validateArray(this.regionsInUse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

