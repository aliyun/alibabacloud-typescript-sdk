// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetExpireTimeResponseBodyNetInfoItemsNetInfoItem extends $dara.Model {
  connectionString?: string;
  DBInstanceNetType?: string;
  expiredTime?: string;
  IPAddress?: string;
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

