// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUmodelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Umodel.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run. The system checks the request but does not make actual changes.
   * - false: sends a normal request.
   * Default value: false.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

