// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcAssetCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * *   **0**: The IP address is valid.
   * *   **1**: The IP address is ignored.
   * *   *2*: The IP address is invalid.
   * *   *3*: The IP address is expired.
   * *   *4*: The probe that is used to scan the IP address does not exist.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The keyword that is used to match assets in fuzzy mode.
   * 
   * @example
   * testwww
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

