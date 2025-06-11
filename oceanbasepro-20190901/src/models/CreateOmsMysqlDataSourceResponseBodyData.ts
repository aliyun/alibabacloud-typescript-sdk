// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOmsMysqlDataSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source record.
   * 
   * @example
   * e_1234abcd*****
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

