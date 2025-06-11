// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesResponseBodyData extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

