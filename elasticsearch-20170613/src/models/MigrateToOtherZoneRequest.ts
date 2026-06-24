// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  body?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run to check whether zone node migration is feasible. Valid values:
   * - true: performs only a validation check without executing the migration task.
   * - false: executes the migration task after the validation check succeeds.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

