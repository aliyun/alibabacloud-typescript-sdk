// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceObservabilityRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: The system checks the request but does not perform the actual operation.
   * - false: The system processes the request normally.
   * Default value: false.
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

