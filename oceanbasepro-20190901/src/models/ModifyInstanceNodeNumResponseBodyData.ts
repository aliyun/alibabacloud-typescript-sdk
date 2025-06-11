// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNodeNumResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result of the dry-run request.
   * - If the DryRun parameter is set to true and the dry run succeeds, the DryRunResult parameter returns true. Otherwise, an error code is returned.
   * - If the DryRun parameter is set to false, no dry run is performed and the DryRunResult parameter returns false.
   * 
   * @example
   * false
   */
  dryRunResult?: boolean;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2132903*********
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

