// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallbackRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  checkForOss?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11234
   */
  id?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      checkForOss: 'CheckForOss',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkForOss: 'boolean',
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

