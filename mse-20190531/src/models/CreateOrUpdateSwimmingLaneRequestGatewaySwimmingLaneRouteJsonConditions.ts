// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateSwimmingLaneRequestGatewaySwimmingLaneRouteJsonConditions extends $dara.Model {
  /**
   * @remarks
   * The matching condition. Valid values:
   * 
   * *   PRE: prefix matching
   * *   EQUAL: exact matching
   * *   ERGULAR: regular expression matching
   * 
   * @example
   * PRE
   */
  cond?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter. Valid values:
   * 
   * *   header
   * *   param
   * 
   * @example
   * header
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * xiaoming
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'Cond',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

