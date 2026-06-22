// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - **cms**: Web-CMS vulnerability
   * - **sys**: Windows system vulnerability
   * - **cve**: Linux software vulnerability
   * - **emg**: emergency vulnerability.
   * 
   * @example
   * {"vulType":"cms"}
   */
  config?: string;
  /**
   * @remarks
   * The query type. Set this parameter to vul.
   * 
   * @example
   * vul
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

