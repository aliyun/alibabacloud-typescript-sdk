// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAdbSecureResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the cloud phone instances for which the ADB authentication feature failed to be enabled.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The IDs of the cloud phone instances for which the ADB authentication feature is enabled.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The total number of the cloud phone instances.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      instanceIds: 'InstanceIds',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
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

export class SetAdbSecureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned object.
   */
  data?: SetAdbSecureResponseBodyData;
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
      data: SetAdbSecureResponseBodyData,
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

