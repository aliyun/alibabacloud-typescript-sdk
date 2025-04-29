// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripCCInfoQueryRequest extends $dara.Model {
  /**
   * @example
   * 2024060710160003300008684
   */
  businessInstanceId?: string;
  /**
   * @example
   * 458003
   */
  nodeId?: string;
  /**
   * @example
   * 2024060710160003300008684
   */
  thirdBusinessId?: string;
  static names(): { [key: string]: string } {
    return {
      businessInstanceId: 'business_instance_id',
      nodeId: 'node_id',
      thirdBusinessId: 'third_business_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInstanceId: 'string',
      nodeId: 'string',
      thirdBusinessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

