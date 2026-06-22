// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcAssetCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the corresponding IP address is valid. Valid values:
   * - **0**: valid
   * - **1**: ignored
   * - **2**: invalid
   * - **3**: expired
   * - **4**: probe does not exist.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The fuzzy match value entered when querying assets.
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

