// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances from which the ADB key pair is successfully detached.
   */
  detachedInstanceIds?: string[];
  /**
   * @remarks
   * The number of the cloud phone instances from which the ADB key pair failed to be detached.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      detachedInstanceIds: 'DetachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detachedInstanceIds)) {
      $dara.Model.validateArray(this.detachedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object that is returned.
   */
  data?: DetachKeyPairResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 69BCBBE4-FCF2-59B8-AD9D-531EB422****
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
      data: DetachKeyPairResponseBodyData,
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

