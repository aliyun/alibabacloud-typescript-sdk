// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAntiBruteForceRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the defense rule against brute-force attacks is set as the default policy in Settings. Valid values:
   * 
   * - **true**: The rule is set as the default policy.
   * 
   * - **false**: The rule is not set as the default policy.
   * 
   * @example
   * true
   */
  defaultRule?: boolean;
  /**
   * @remarks
   * The threshold for the number of logon failures. Valid values:
   * 
   * - **2**: 2 times
   * - **3**: 3 times
   * - **4**: 4 times
   * - **5**: 5 times
   * - **10**: 10 times
   * - **50**: 50 times
   * - **80**: 80 times
   * - **100**: 100 times.
   * 
   * @example
   * 10
   */
  failCount?: number;
  /**
   * @remarks
   * The duration for which logon is prohibited, in minutes. Valid values:
   * 
   * - **5**: 5 minutes
   * - **15**: 15 minutes
   * - **30**: 30 minutes
   * - **60**: 1 hour
   * - **120**: 2 hours
   * - **360**: 6 hours
   * - **720**: 12 hours
   * - **1440**: 24 hours
   * - **10080**: 7 days
   * - **52560000**: permanent (100 years).
   * 
   * @example
   * 5
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The ID of the defense rule against brute-force attacks.
   * 
   * This parameter is required.
   * 
   * @example
   * 65778
   */
  id?: number;
  /**
   * @remarks
   * The name of the defense rule against brute-force attacks.
   * 
   * @example
   * TestRule
   */
  name?: string;
  /**
   * @remarks
   * The protocol types that the defense rule against brute-force attacks supports for interception.
   */
  protocolTypeShrink?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The threshold for the period of time during which logon failures are counted, in minutes. Valid values:
   * 
   * - **1**: 1 minute
   * - **2**: 2 minutes
   * - **5**: 5 minutes
   * - **10**: 10 minutes
   * - **15**: 15 minutes.
   * 
   * @example
   * 1
   */
  span?: number;
  /**
   * @remarks
   * The list of servers to which the defense rule against brute-force attacks applies.
   * 
   * @example
   * uuid-13213-dasda
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultRule: 'DefaultRule',
      failCount: 'FailCount',
      forbiddenTime: 'ForbiddenTime',
      id: 'Id',
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
      id: 'number',
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

