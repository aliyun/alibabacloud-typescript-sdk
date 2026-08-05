// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperienceDataRequest extends $dara.Model {
  /**
   * @remarks
   * Whether this is a dry run request
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

