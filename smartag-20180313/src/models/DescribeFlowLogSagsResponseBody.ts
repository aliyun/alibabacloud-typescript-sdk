// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogSagsResponseBodySagsSag extends $dara.Model {
  description?: string;
  name?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBodySags extends $dara.Model {
  sag?: DescribeFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeFlowLogSagsResponseBodySagsSag },
    };
  }

  validate() {
    if(Array.isArray(this.sag)) {
      $dara.Model.validateArray(this.sag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogSagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 4
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8D945945-85F2-4BD7-A144-7DC0E8B5A0DC
   */
  requestId?: string;
  sags?: DescribeFlowLogSagsResponseBodySags;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 35
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sags: 'Sags',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sags: DescribeFlowLogSagsResponseBodySags,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sags && typeof (this.sags as any).validate === 'function') {
      (this.sags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

