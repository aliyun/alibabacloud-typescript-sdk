// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserInfoInChannelResponseBodyProperty extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the meeting (UTC time).
   * 
   * @example
   * 1557909133
   */
  join?: number;
  /**
   * @remarks
   * The role type in the meeting. Valid values:
   * 
   * - **0**: The user role in communication mode.
   *  
   * - **1**: The interactive role.
   *  
   * - **2**: The live (view only) role.
   * 
   * @example
   * 1
   */
  role?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * xa744sxx8rtobgj****
   */
  session?: string;
  static names(): { [key: string]: string } {
    return {
      join: 'Join',
      role: 'Role',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      join: 'number',
      role: 'number',
      session: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoInChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:
   * - **true**: The channel exists.
   * - **false**: The channel does not exist.
   * 
   * @example
   * true
   */
  isChannelExist?: boolean;
  /**
   * @remarks
   * Indicates whether the user is currently in the channel. Valid values:
   * - **true**: The user is in the channel.
   * - **false**: The user is not in the channel.
   * 
   * @example
   * true
   */
  isInChannel?: boolean;
  /**
   * @remarks
   * The information of the user in the channel.
   */
  property?: DescribeUserInfoInChannelResponseBodyProperty[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6159ba01-6687-4fb2-a831-f0cd8d188648
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp of the current moment (UTC time).
   * 
   * @example
   * 1557909133
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      isChannelExist: 'IsChannelExist',
      isInChannel: 'IsInChannel',
      property: 'Property',
      requestId: 'RequestId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isChannelExist: 'boolean',
      isInChannel: 'boolean',
      property: { 'type': 'array', 'itemType': DescribeUserInfoInChannelResponseBodyProperty },
      requestId: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

