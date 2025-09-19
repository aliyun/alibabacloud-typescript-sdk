// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonTargetResultListRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 113.57.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the configuration item. Valid values:
   * 
   * *   **webshell_timescan**: webshell detection and removal
   * *   **aliscriptengine**: in-depth detection engine
   * *   **alidetect**: installation scope of local file detection
   * *   **alidetect-scan-enable**: detection scope of local file detection
   * 
   * >  You can call the [ListClientUserDefineRules](~~ListClientUserDefineRules~~) and [ListSystemClientRules](~~ListSystemClientRules~~) operations to obtain more types of custom and system configuration items.
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

