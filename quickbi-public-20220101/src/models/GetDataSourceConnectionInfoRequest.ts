// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataSourceConnectionInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7AAB95D-*****-****-*4FC0C976
   */
  dsId?: string;
  static names(): { [key: string]: string } {
    return {
      dsId: 'DsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

