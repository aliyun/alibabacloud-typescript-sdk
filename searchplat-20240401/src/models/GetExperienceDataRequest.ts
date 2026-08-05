// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperienceDataRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to validate the request parameters without performing the actual operation. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**
   * 
   * - **false**.
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

