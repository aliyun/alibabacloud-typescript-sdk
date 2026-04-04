// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppAssistantAgentsRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * ChannelOps
   */
  platformType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      platformType: 'PlatformType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      platformType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

