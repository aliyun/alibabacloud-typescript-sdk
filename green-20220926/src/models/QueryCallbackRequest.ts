// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * Query data under the OSS detection task.
   * 
   * @example
   * true
   */
  checkForOss?: boolean;
  /**
   * @remarks
   * Primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11234
   */
  id?: number;
  /**
   * @remarks
   * Region ID.
   * 
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

