// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineKeyPathRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-07-07T00:00:00+0800
   */
  bizdate?: string;
  /**
   * @remarks
   * The ID of the event.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  inGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      bizdate: 'Bizdate',
      inGroupId: 'InGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
      bizdate: 'string',
      inGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

