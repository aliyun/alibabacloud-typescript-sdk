// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortAutoCcStatusResponseBodyPortAutoCcStatus extends $dara.Model {
  /**
   * @remarks
   * The mode of the Intelligent Protection policy. Valid values:
   * 
   * *   **normal**
   * *   **loose**
   * *   **strict**
   * 
   * @example
   * normal
   */
  mode?: string;
  /**
   * @remarks
   * The status of the Intelligent Protection policy. Valid values:
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * on
   */
  switch?: string;
  /**
   * @remarks
   * The protection mode for ports 80 and 443. Valid values:
   * 
   * *   **normal**
   * *   **loose**
   * *   **strict**
   * 
   * @example
   * normal
   */
  webMode?: string;
  /**
   * @remarks
   * The status of the Intelligent Protection policy for ports 80 and 443. Valid values:
   * 
   * *   **on**: enabled
   * *   **off**: disabled
   * 
   * @example
   * off
   */
  webSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      switch: 'Switch',
      webMode: 'WebMode',
      webSwitch: 'WebSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      switch: 'string',
      webMode: 'string',
      webSwitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

