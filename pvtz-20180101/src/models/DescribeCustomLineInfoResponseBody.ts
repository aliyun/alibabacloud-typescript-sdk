// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLineInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creation timestamp in milliseconds.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 260282302749096109
   */
  creator?: string;
  /**
   * @remarks
   * The subtype of the creator. Valid values:
   * 
   * - `CUSTOM`: Alibaba Cloud account
   * 
   * - `SUB`: RAM user
   * 
   * - `STS`: assumed role
   * 
   * - `OTHER`: other roles
   * 
   * @example
   * CUSTOM
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The creator type. Valid values:
   * 
   * - `USER`: user
   * 
   * - `SYSTEM`: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  dnscategory?: string;
  /**
   * @remarks
   * A list of IPv4 address segments.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 100003
   */
  lineId?: string;
  /**
   * @remarks
   * The custom line name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last update timestamp in milliseconds.
   * 
   * @example
   * 1516775741000
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      dnscategory: 'Dnscategory',
      ipv4s: 'Ipv4s',
      lineId: 'LineId',
      name: 'Name',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'string',
      creatorSubType: 'string',
      creatorType: 'string',
      dnscategory: 'string',
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lineId: 'string',
      name: 'string',
      requestId: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4s)) {
      $dara.Model.validateArray(this.ipv4s);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

