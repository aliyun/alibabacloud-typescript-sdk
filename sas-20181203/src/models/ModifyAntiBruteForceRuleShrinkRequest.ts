// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAntiBruteForceRuleShrinkRequest extends $dara.Model {
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
   * The threshold of logon failures that you specify. Valid values:
   * 
   * *   **2**
   * *   **3**
   * *   **4**
   * *   **5**
   * *   **10**
   * *   **50**
   * *   **80**
   * *   **100**
   * 
   * @example
   * 10
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
   * @example
   * 5
   */
  forbiddenTime?: number;
  /**
   * @remarks
   * The ID of the defense rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 65778
   */
  id?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * @example
   * TestRule
   */
  name?: string;
  /**
   * @remarks
   * The protocol types supported by the anti-brute force rule for interception.
   */
  protocolTypeShrink?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The period of time during which logon failures from an account are measured. Unit: minutes. Valid values:
   * 
   * *   **1**
   * *   **2**
   * *   **5**
   * *   **10**
   * *   **15**
   * 
   * @example
   * 1
   */
  span?: number;
  /**
   * @remarks
   * An array consisting of the UUIDs of the servers to which the defense rule is applied.
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

