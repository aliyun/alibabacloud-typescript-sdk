// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsDataSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 18
   */
  dataSourceId?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

