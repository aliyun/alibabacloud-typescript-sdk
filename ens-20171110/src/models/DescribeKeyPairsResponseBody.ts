// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $dara.Model {
  /**
   * @remarks
   * The time when the key pair was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-04-26T15:38:27Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * fdaf8ff7a756ef843814fc****
   */
  keyPairFingerPrint?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * ssh-50cynkq42sgj4ej1tn78t4***
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairs extends $dara.Model {
  keyPair?: DescribeKeyPairsResponseBodyKeyPairsKeyPair[];
  static names(): { [key: string]: string } {
    return {
      keyPair: 'KeyPair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPair: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPair },
    };
  }

  validate() {
    if(Array.isArray(this.keyPair)) {
      $dara.Model.validateArray(this.keyPair);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the key pairs.
   */
  keyPairs?: DescribeKeyPairsResponseBodyKeyPairs;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 37B52F33-6879-49D0-A39B-22966B01449E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of key pairs.
   * 
   * @example
   * 7
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
      keyPairs: DescribeKeyPairsResponseBodyKeyPairs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.keyPairs && typeof (this.keyPairs as any).validate === 'function') {
      (this.keyPairs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

