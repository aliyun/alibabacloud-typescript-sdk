// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneResponseBodyDataGatewaySwimmingLaneRouteConditions extends $dara.Model {
  /**
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @example
   * name
   */
  name?: string;
  nameList?: string[];
  /**
   * @example
   * header
   */
  type?: string;
  /**
   * @example
   * xiaoming
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      name: 'Name',
      nameList: 'NameList',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      name: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

