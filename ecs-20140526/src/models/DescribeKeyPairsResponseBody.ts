// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairsKeyPairTags extends $dara.Model {
  tag?: DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeKeyPairsResponseBodyKeyPairsKeyPairTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyPairsResponseBodyKeyPairsKeyPair extends $dara.Model {
  creationTime?: string;
  keyPairFingerPrint?: string;
  keyPairName?: string;
  publicKey?: string;
  resourceGroupId?: string;
  tags?: DescribeKeyPairsResponseBodyKeyPairsKeyPairTags;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      keyPairFingerPrint: 'KeyPairFingerPrint',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      keyPairFingerPrint: 'string',
      keyPairName: 'string',
      publicKey: 'string',
      resourceGroupId: 'string',
      tags: DescribeKeyPairsResponseBodyKeyPairsKeyPairTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
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
  keyPairs?: DescribeKeyPairsResponseBodyKeyPairs;
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
   * The number of entries returned per page.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of key pairs.
   * 
   * @example
   * 1
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

