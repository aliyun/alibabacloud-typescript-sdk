// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class ModifyAppGroupQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: Quota;
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of input parameters. Default value: false.
   * 
   * Valid values:
   * 
   * *   **true**: checks only the validity of input parameters.
   * *   **false**: checks the validity of input parameters and creates an attribution configuration.
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

