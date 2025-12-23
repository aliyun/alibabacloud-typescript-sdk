// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserAnalyzerRequest extends $dara.Model {
  /**
   * @remarks
   * The basic analyzer.
   * 
   * @example
   * chn_standard
   */
  business?: string;
  /**
   * @remarks
   * The application ID of the custom analyzer.
   * 
   * @example
   * 110123123
   */
  businessAppGroupId?: string;
  /**
   * @remarks
   * The basic analyzer type. Valid values: AUTO, MODEL, SYSTEM, and USER.
   * 
   * @example
   * AUTO
   */
  businessType?: string;
  /**
   * @remarks
   * The analyzer name.
   * 
   * @example
   * jmbon_analyzer
   */
  name?: string;
  /**
   * @remarks
   * The engine type. Valid values: HA3 and ES.
   * 
   * @example
   * HA3
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Default value: false.
   * Valid values:
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      business: 'business',
      businessAppGroupId: 'businessAppGroupId',
      businessType: 'businessType',
      name: 'name',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      business: 'string',
      businessAppGroupId: 'string',
      businessType: 'string',
      name: 'string',
      type: 'string',
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

