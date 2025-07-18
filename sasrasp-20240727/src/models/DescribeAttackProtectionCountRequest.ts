// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackProtectionCountRequest extends $dara.Model {
  /**
   * @example
   * sas
   */
  agentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1767456000000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739289981765
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      endTimestamp: 'EndTimestamp',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      endTimestamp: 'number',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

