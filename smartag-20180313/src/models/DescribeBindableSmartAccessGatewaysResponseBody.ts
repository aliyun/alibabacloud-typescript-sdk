// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway extends $dara.Model {
  name?: string;
  smartAGId?: string;
  smartAGUid?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      smartAGId: 'SmartAGId',
      smartAGUid: 'SmartAGUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      smartAGId: 'string',
      smartAGUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways extends $dara.Model {
  smartAccessGateway?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway[];
  static names(): { [key: string]: string } {
    return {
      smartAccessGateway: 'SmartAccessGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAccessGateway: { 'type': 'array', 'itemType': DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGatewaysSmartAccessGateway },
    };
  }

  validate() {
    if(Array.isArray(this.smartAccessGateway)) {
      $dara.Model.validateArray(this.smartAccessGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindableSmartAccessGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9731C2F5-B9A4-42FD-AFD2-361A403E6E85
   */
  requestId?: string;
  smartAccessGateways?: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways;
  /**
   * @remarks
   * The total number of SAG instances.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smartAccessGateways: 'SmartAccessGateways',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      smartAccessGateways: DescribeBindableSmartAccessGatewaysResponseBodySmartAccessGateways,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.smartAccessGateways && typeof (this.smartAccessGateways as any).validate === 'function') {
      (this.smartAccessGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

