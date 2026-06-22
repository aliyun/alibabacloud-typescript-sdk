// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonTargetResultListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the access source to query.
   * 
   * @example
   * 113.57.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The configuration rule type. Valid values:
   * 
   * - **webshell_timescan**: web shell scan.
   * - **aliscriptengine**: deep detection engine.
   * - **alidetect**: installation scope of the local file detection engine.
   * - **alidetect-scan-enable**: detection scope of the local file detection engine.
   * 
   * > You can call [ListClientUserDefineRules](~~ListClientUserDefineRules~~) and [ListSystemClientRules](~~ListSystemClientRules~~) to obtain more custom and system-configured rule types.
   * 
   * This parameter is required.
   * 
   * @example
   * webshell_timescan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

