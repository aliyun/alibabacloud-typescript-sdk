// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeyPairsResponseBodyKeyPairs extends $dara.Model {
  /**
   * @remarks
   * The time when the key pair was created. The time follows the UTC (Z) time zone and is in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2024-05-06T02:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IDs of the simple application server instances. A maximum of 50 instance IDs are supported.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 64 characters in length and can contain letters and Chinese characters. It must start with an uppercase or lowercase letter or a Chinese character, and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The content of the public key.
   * 
   * @example
   * ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbO5Govwhb0iHzoMYKkIQxjlHyHH8nxFsW6KF5saxgYhOwdeIpWngpi+/NDWQKvuOnXFFDh/o3eJJkh3rqP+RlMggt4HLQWOd9TS0f4/cgbAzud1caW9PnankCr****
   */
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceIds: 'InstanceIds',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      publicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of key pair information.
   */
  keyPairs?: ListKeyPairsResponseBodyKeyPairs[];
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
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of key pairs.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyPairs: 'KeyPairs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairs: { 'type': 'array', 'itemType': ListKeyPairsResponseBodyKeyPairs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyPairs)) {
      $dara.Model.validateArray(this.keyPairs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

