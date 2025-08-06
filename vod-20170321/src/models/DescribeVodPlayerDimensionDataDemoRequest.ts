// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerDimensionDataDemoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Os
   */
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dimension: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

