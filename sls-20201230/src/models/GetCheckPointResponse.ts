// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The shard ID.
   * 
   * @example
   * 0
   */
  shard?: number;
  /**
   * @remarks
   * The value of the checkpoint.
   * 
   * @example
   * MTUyNDE1NTM3OTM3MzkwODQ5Ng==
   */
  checkpoint?: string;
  /**
   * @remarks
   * The time when the checkpoint was last updated. The value is a UNIX timestamp representing the number of seconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524224984800922
   */
  updateTime?: number;
  /**
   * @remarks
   * The consumer at the checkpoint.
   * 
   * @example
   * consumer_1
   */
  consumer?: string;
  static names(): { [key: string]: string } {
    return {
      shard: 'shard',
      checkpoint: 'checkpoint',
      updateTime: 'updateTime',
      consumer: 'consumer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shard: 'number',
      checkpoint: 'string',
      updateTime: 'number',
      consumer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckPointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCheckPointResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetCheckPointResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

