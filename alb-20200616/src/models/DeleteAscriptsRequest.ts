// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the programmable scripts.
   * 
   * This parameter is required.
   */
  AScriptIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and ensure that the value is unique among different requests. The client token can contain only ASCII characters. If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * f516e84e-fc0c-4c2d-a461-6cd77******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * - **true**: performs a dry run and does not delete the programmable scripts. The system checks whether required parameters are specified, the request format, and service limits. If the check fails, the system returns an error. If the check succeeds, the system returns the `DryRunOperation` error code.
   * - **false** (default): performs a regular request. If the check succeeds, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      AScriptIds: 'AScriptIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AScriptIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.AScriptIds)) {
      $dara.Model.validateArray(this.AScriptIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

