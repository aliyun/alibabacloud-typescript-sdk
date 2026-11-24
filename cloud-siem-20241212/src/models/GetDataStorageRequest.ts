// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If it is not provided, the service returns a 400 error with the message "The specified Lang can not be empty." Explicitly pass the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * Specifies whether to read the auto-discovered index configuration of each Logstore. This operation requires accessing Simple Log Service (SLS) for each Logstore. Default value: false. Set this parameter to true only on the storage management page.
   */
  withAutoKeyDetect?: boolean;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      withAutoKeyDetect: 'WithAutoKeyDetect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
      withAutoKeyDetect: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

