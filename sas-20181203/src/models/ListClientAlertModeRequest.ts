// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientAlertModeRequest extends $dara.Model {
  /**
   * @remarks
   * The protection mode. Valid values:
   * - **strict**: Strict mode. Defense mode has a risk of false positives. Use Defense mode during critical event protection periods.
   * - **balance**: Balance mode. Defense mode detects more suspicious risks while reducing false positives.
   * 
   * @example
   * strict
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

