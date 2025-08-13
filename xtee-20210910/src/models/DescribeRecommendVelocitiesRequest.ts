// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendVelocitiesRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and responses, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Metric code
   * 
   * @example
   * coupon_abuse_detection
   */
  code?: string;
  /**
   * @remarks
   * Region ID
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Metric type
   * 
   * @example
   * recommend_velocity
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      code: 'code',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      code: 'string',
      regId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

