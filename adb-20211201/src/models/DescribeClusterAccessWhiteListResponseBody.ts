// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAccessWhiteListResponseBodyItemsIPArray extends $dara.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBodyItems extends $dara.Model {
  IPArray?: DescribeClusterAccessWhiteListResponseBodyItemsIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeClusterAccessWhiteListResponseBodyItemsIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.IPArray)) {
      $dara.Model.validateArray(this.IPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBody extends $dara.Model {
  items?: DescribeClusterAccessWhiteListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeClusterAccessWhiteListResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

