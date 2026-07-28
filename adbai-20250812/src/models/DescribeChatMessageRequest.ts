// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The question statement submitted by the user.
   * 
   * This parameter is required.
   * 
   * @example
   * How to set reasonable annual plan goals?
   */
  query?: string;
  /**
   * @remarks
   * The Alibaba Cloud region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * df94eec5-3d95-435c-87d4-43e8bb3f9519
   */
  sessionId?: string;
  /**
   * **if can be null:**
   * true
   */
  skill?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      skill: 'Skill',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      regionId: 'string',
      sessionId: 'string',
      skill: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

