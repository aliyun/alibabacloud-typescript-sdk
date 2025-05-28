// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSourceBloodRequest extends $dara.Model {
  /**
   * @remarks
   * Data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 44051300991327000048
   */
  dataSourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

