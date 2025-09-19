// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAntiBruteForceRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to set the defense rule as the default rule. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  defaultRule?: boolean;
  /**
   * @remarks
   * The maximum number of failed logon attempts from an account. Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  failCount?: number;
  /**
   * @remarks
   * The period of time during which logons from an account are not allowed. Unit: minutes. Valid values:
   * 
   * *   **5**
   * *   **15**
   * *   **30**
   * *   **60**
   * *   **120**
   * *   **360**
   * *   **720**
   * *   **1440**
   * *   **10080**
   * *   **52560000**: permanent
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * This parameter is required.
   * 
   * @example
   * TestAntiBruteForceRule
   */
  name?: string;
  /**
   * @remarks
   * The types of protocols supported for interception by the brute force attack rule creation.
   */
  protocolTypeShrink?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The maximum period of time during which failed logon attempts from an account can occur. Unit: minutes. Valid values:
   * 
   * *   **1**
   * *   **2**
   * *   **5**
   * *   **10**
   * *   **15**
   * 
   * >  To configure a defense rule, you must specify the Span, FailCount, and ForbiddenTime parameters. If the number of failed logon attempts from an account within the minutes specified by Span exceeds the value specified by FailCount, the account cannot be used for logons within the minutes specified by ForbiddenTime.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  span?: number;
  /**
   * @remarks
   * The UUIDs of the servers to which you want to apply the defense rule.
   * 
   * This parameter is required.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'DefaultRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      name: 'Name',
      protocolTypeShrink: 'ProtocolType',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIp: 'SourceIp',
      span: 'Span',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRule: 'boolean',
      failCount: 'number',
      forbiddenTime: 'number',
      name: 'string',
      protocolTypeShrink: 'string',
      resourceOwnerId: 'number',
      sourceIp: 'string',
      span: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

