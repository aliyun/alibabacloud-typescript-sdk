// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class ModifyAppGroupQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: Quota;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates this value to make sure that it is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 74db41d8cd3c784209093aa76afbe89e
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**: Validates the request parameters without creating the attribution configuration.
   * 
   * - **false**: Validates the request parameters and creates the attribution configuration.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Quota,
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

