// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotListConversationsRequest extends $dara.Model {
  page?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

