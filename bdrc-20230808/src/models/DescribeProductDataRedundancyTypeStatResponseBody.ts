// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductDataRedundancyTypeStatResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The data redundancy type.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * The resource count.
   * 
   * @example
   * 1
   */
  resourceCount?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      dataRedundancyType: 'DataRedundancyType',
      resourceCount: 'ResourceCount',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataRedundancyType: 'string',
      resourceCount: 'number',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductDataRedundancyTypeStatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of records returned by the request.
   */
  content?: DescribeProductDataRedundancyTypeStatResponseBodyDataContent[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeProductDataRedundancyTypeStatResponseBodyDataContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductDataRedundancyTypeStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeProductDataRedundancyTypeStatResponseBodyData;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 5748C531-80B1-5C31-8421-63A1830B9E48
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProductDataRedundancyTypeStatResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

