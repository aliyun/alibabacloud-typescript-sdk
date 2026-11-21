// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEntityStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values: true: performs a dry run without making actual changes. false: sends a normal request. Default value: false.
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

