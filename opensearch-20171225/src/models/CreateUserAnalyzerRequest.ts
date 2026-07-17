// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserAnalyzerRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the basic analyzer.
   * 
   * @example
   * Chinese - general analysis
   */
  business?: string;
  /**
   * @remarks
   * The application ID for the custom model-based analyzer.
   * 
   * @example
   * 110123123
   */
  businessAppGroupId?: string;
  /**
   * @remarks
   * The type of the basic analyzer. Valid values: AUTO, MODEL, SYSTEM, and USER.
   * 
   * @example
   * AUTO
   */
  businessType?: string;
  /**
   * @remarks
   * The name of the analyzer.
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: sends a check request without creating the analyzer. The system checks the AccessKey, RAM user authorization, and required parameters.
   * 
   * - false (default): sends a regular request to create the analyzer.
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

