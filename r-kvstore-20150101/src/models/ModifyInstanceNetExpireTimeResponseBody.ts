// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the classic network.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the instance. The returned value is **Classic**.
   * 
   * @example
   * Classic
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The expiration time of the classic network endpoint.
   * 
   * @example
   * 2019-08-01T09:29:18Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The IP address of the instance in the classic network.
   * 
   * @example
   * 100.118.142.***
   */
  IPAddress?: string;
  /**
   * @remarks
   * The port number that is used to connect to the instance.
   * 
   * @example
   * 6379
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceNetType: 'DBInstanceNetType',
      expiredTime: 'ExpiredTime',
      IPAddress: 'IPAddress',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceNetType: 'string',
      expiredTime: 'string',
      IPAddress: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponseBodyNetInfoItems extends $dara.Model {
  netInfoItem?: ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoItem)) {
      $dara.Model.validateArray(this.netInfoItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNetExpireTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * Details about the extension period for which the classic network endpoint of the instance is retained.
   */
  netInfoItems?: ModifyInstanceNetExpireTimeResponseBodyNetInfoItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C4AF387-1EA3-4C84-8013-3F6B973EDDF5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      netInfoItems: ModifyInstanceNetExpireTimeResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.netInfoItems && typeof (this.netInfoItems as any).validate === 'function') {
      (this.netInfoItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

