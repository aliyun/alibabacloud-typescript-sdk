// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventTypesResponseBodyEventTypeListSubTypeList } from "./DescribeEventTypesResponseBodyEventTypeListSubTypeList";


export class DescribeEventTypesResponseBodyEventTypeList extends $dara.Model {
  /**
   * @remarks
   * The code of the anomalous event type.
   * 
   * @example
   * 01
   */
  code?: string;
  /**
   * @remarks
   * The description of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage,\\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The ID of the anomalous event type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the anomalous event type.
   * 
   * @example
   * Anomalous permission usage
   */
  name?: string;
  /**
   * @remarks
   * An array that consists of anomalous event subtypes.
   */
  subTypeList?: DescribeEventTypesResponseBodyEventTypeListSubTypeList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      subTypeList: 'SubTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      subTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeListSubTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.subTypeList)) {
      $dara.Model.validateArray(this.subTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

