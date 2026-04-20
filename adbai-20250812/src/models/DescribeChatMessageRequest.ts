// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * df94eec5-3d95-435c-87d4-43e8bb3f9519
   */
  sessionId?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      regionId: 'string',
      sessionId: 'string',
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

