// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCallbackRequest extends $dara.Model {
  /**
   * @example
   * SHA256
   */
  cryptType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 112
   */
  id?: number;
  name?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * all
   */
  scope?: string;
  /**
   * @example
   * https://www.aliyuncs.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      cryptType: 'CryptType',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      scope: 'Scope',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cryptType: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      scope: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

