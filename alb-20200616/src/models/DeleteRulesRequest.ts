// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: performs only a dry run and does not delete the forwarding rules. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of forwarding rules. You can specify up to 100 forwarding rules at a time.
   * 
   * This parameter is required.
   */
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

