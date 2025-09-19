// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskItemTypeResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 37625
   */
  id?: number;
  /**
   * @remarks
   * The name of the check type.
   * 
   * @example
   * Identity authentication and permissions
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskItemTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of information about the type of the check item.
   */
  list?: DescribeRiskItemTypeResponseBodyList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3B3F3A90-46A5-4023-A2D8-D68B14262F96
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeRiskItemTypeResponseBodyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

