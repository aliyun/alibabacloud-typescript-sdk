// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSchemeTaskConfigResponseBodyDataDataConfigAssignConfigsAssignConfigContests extends $dara.Model {
  /**
   * @example
   * 3
   */
  dataType?: number;
  listObject?: any[];
  /**
   * @example
   * callStartTime
   */
  name?: string;
  /**
   * @example
   * 4
   */
  symbol?: number;
  /**
   * @example
   * {\\"start\\":\\"2022-09-01 00:00:00\\",\\"end\\":\\"2022-09-30 00:00:00\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      listObject: 'ListObject',
      name: 'Name',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'number',
      listObject: { 'type': 'array', 'itemType': 'any' },
      name: 'string',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listObject)) {
      $dara.Model.validateArray(this.listObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

