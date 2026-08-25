// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomResourceStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Default value: enterprise.
   * 
   * @example
   * enterprise
   */
  mainBizType?: string;
  static names(): { [key: string]: string } {
    return {
      mainBizType: 'MainBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainBizType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

