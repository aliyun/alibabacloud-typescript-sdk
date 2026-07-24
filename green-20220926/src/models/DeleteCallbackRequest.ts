// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the message notification data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1480
   */
  id?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

