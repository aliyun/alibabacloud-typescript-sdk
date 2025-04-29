// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripTaskQueryRequest extends $dara.Model {
  /**
   * @example
   * 12345
   */
  businessInstanceId?: string;
  /**
   * @example
   * 12345
   */
  thirdBusinessId?: string;
  /**
   * @example
   * thirdpart12138
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessInstanceId: 'business_instance_id',
      thirdBusinessId: 'third_business_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessInstanceId: 'string',
      thirdBusinessId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

