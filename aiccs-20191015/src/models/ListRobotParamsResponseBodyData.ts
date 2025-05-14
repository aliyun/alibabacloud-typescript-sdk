// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotParamsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  isEmpty?: number;
  /**
   * @example
   * name
   */
  paramCode?: string;
  paramName?: string;
  static names(): { [key: string]: string } {
    return {
      isEmpty: 'IsEmpty',
      paramCode: 'ParamCode',
      paramName: 'ParamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEmpty: 'number',
      paramCode: 'string',
      paramName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

