// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableDetailResponseBodyItemsShard extends $dara.Model {
  /**
   * @remarks
   * The partition ID. Only the numeric part of the partition name is returned.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of rows in the partition.
   * 
   * @example
   * 0
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The queried shards.
   */
  shard?: DescribeTableDetailResponseBodyItemsShard[];
  static names(): { [key: string]: string } {
    return {
      shard: 'Shard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: { 'type': 'array', 'itemType': DescribeTableDetailResponseBodyItemsShard },
    };
  }

  validate() {
    if(Array.isArray(this.shard)) {
      $dara.Model.validateArray(this.shard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average number of rows in partitions.
   * 
   * @example
   * 0
   */
  avgSize?: number;
  /**
   * @remarks
   * The queried shard.
   */
  items?: DescribeTableDetailResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avgSize: 'AvgSize',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgSize: 'number',
      items: DescribeTableDetailResponseBodyItems,
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

