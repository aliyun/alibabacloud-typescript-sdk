// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cloud phone instance ID list to which the key pair was successfully attached.
   */
  attachedInstanceIds?: string[];
  /**
   * @remarks
   * The number of instances to which the attachment failed.
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
   * The total number of instances for which the attachment was attempted.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attachedInstanceIds: 'AttachedInstanceIds',
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedInstanceIds: { 'type': 'array', 'itemType': 'string' },
      failCount: 'number',
      keyPairId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachedInstanceIds)) {
      $dara.Model.validateArray(this.attachedInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result object.
   */
  data?: AttachKeyPairResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      data: AttachKeyPairResponseBodyData,
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

