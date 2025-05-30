// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandPlanListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FY2022
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  planType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      period: 'period',
      planType: 'planType',
      size: 'size',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      period: 'string',
      planType: 'number',
      size: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

