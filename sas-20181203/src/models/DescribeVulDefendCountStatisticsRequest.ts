// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDefendCountStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the vulnerabilities. Valid values:
   * 
   * *   app: application vulnerabilities
   * *   emg: urgent vulnerabilities
   * 
   * @example
   * emg
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

