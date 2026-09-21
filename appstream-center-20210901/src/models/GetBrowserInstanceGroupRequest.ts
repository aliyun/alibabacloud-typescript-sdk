// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBrowserInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud browser group ID. This parameter is required. Specify the ID of a browser group that is created under the current account.
   * 
   * @example
   * big-0c7loey7fzjq****
   */
  browserInstanceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      browserInstanceGroupId: 'BrowserInstanceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInstanceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

