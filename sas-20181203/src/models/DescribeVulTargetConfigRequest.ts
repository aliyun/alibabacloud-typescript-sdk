// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulTargetConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * ae1527a9-2308-46ab-b10a-48ae7ff7****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

