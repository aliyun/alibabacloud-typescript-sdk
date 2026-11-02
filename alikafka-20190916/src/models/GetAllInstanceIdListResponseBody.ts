// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllInstanceIdListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The instance IDs of all instances across all regions under the current account.
   * 
   * @example
   * [{"cn-shenzhen": ["alikafka_post-cn-7pp2btvo****"],"us-west-1": ["alikafka_pre-cn-i7m2lxid****"],"cn-hangzhou": ["alikafka_pre-cn-i7m2hflj****","alikafka_pre-cn-zvp2hsje****","alikafka_pre-cn-zvp2kvc9****"]}]
   */
  instanceIds?: { [key: string]: any };
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceIds) {
      $dara.Model.validateMap(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

