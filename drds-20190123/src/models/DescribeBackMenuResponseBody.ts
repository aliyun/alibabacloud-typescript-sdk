// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackMenuResponseBodyListList extends $dara.Model {
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Logic **: logical backup
   * *   **phy**: physical backup
   * 
   * @example
   * phy
   */
  menuName?: string;
  /**
   * @remarks
   * Indicates whether backup recovery is supported.
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuName: 'MenuName',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuName: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBodyList extends $dara.Model {
  list?: DescribeBackMenuResponseBodyListList[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeBackMenuResponseBodyListList },
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

export class DescribeBackMenuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup information list.
   */
  list?: DescribeBackMenuResponseBodyList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60C21BE4-EDFE-454C-95ED-3A5C74******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeBackMenuResponseBodyList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

