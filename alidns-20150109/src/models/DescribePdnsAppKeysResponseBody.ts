// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsAppKeysResponseBodyAppKeysBindEdgeDnsClusters extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  clusterUserId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterUserId: 'ClusterUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysResponseBodyAppKeys extends $dara.Model {
  appKeyId?: string;
  bindEdgeDnsClusters?: DescribePdnsAppKeysResponseBodyAppKeysBindEdgeDnsClusters[];
  createDate?: string;
  createTimestamp?: number;
  remark?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appKeyId: 'AppKeyId',
      bindEdgeDnsClusters: 'BindEdgeDnsClusters',
      createDate: 'CreateDate',
      createTimestamp: 'CreateTimestamp',
      remark: 'Remark',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeyId: 'string',
      bindEdgeDnsClusters: { 'type': 'array', 'itemType': DescribePdnsAppKeysResponseBodyAppKeysBindEdgeDnsClusters },
      createDate: 'string',
      createTimestamp: 'number',
      remark: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindEdgeDnsClusters)) {
      $dara.Model.validateArray(this.bindEdgeDnsClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsAppKeysResponseBody extends $dara.Model {
  appKeys?: DescribePdnsAppKeysResponseBodyAppKeys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKeys: 'AppKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKeys: { 'type': 'array', 'itemType': DescribePdnsAppKeysResponseBodyAppKeys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appKeys)) {
      $dara.Model.validateArray(this.appKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

