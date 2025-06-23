// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the location is blocked. Valid values:
   * 
   * *   **0**: yes
   * *   **1**: no
   * 
   * @example
   * 0
   */
  block?: number;
  /**
   * @remarks
   * The name of the location.
   * 
   * @example
   * CN-SHANGHAI
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      block: 'Block',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      block: 'number',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

