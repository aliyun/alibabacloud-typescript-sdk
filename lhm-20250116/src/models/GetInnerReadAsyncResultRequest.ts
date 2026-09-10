// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInnerReadAsyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The data source name. The probe task uses this field as its dimension identifier.
   * 
   * @example
   * ds_dolphin_prod
   */
  dataSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'dataSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

