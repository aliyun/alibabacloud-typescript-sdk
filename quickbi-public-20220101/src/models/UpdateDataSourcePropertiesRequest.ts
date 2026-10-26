// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourcePropertiesRequest extends $dara.Model {
  /**
   * @example
   * ssss
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  /**
   * @example
   * sss
   */
  quickBIOwnerId?: string;
  /**
   * @example
   * wls
   */
  showName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dsId: 'DsId',
      quickBIOwnerId: 'QuickBIOwnerId',
      showName: 'ShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dsId: 'string',
      quickBIOwnerId: 'string',
      showName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

