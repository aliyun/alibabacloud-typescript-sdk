// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLineInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the custom line was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-23T03:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the custom line was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1516775741000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The creator of the custom line.
   * 
   * @example
   * 260282302749096109
   */
  creator?: string;
  /**
   * @remarks
   * The type of the creator. Valid values:
   * 
   * *   CUSTOM: Alibaba Cloud account
   * *   SUB: RAM user
   * *   STS: assumed role that obtains the Security Token Service (STS) token of a RAM role
   * *   OTHER: other roles
   * 
   * @example
   * CUSTOM
   */
  creatorSubType?: string;
  /**
   * @remarks
   * The role of the creator. Valid values:
   * 
   * *   USER: user
   * *   SYSTEM: system
   * 
   * @example
   * USER
   */
  creatorType?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
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
   * The name of the custom line.
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
   * The time when the custom line was updated. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-24T06:35Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the custom line was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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

