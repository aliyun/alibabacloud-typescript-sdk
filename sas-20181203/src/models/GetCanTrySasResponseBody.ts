// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCanTrySasResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is qualified for the trial use. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canTry?: number;
  /**
   * @remarks
   * The editions that are allowed for the trial use.
   */
  canTryVersions?: number[];
  /**
   * @remarks
   * The trial type. Valid values:
   * 
   * *   **0**: trial prohibited
   * *   **1**: first trial
   * *   **2**: second trial
   * 
   * @example
   * 1
   */
  tryType?: number;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      canTryVersions: 'CanTryVersions',
      tryType: 'TryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'number',
      canTryVersions: { 'type': 'array', 'itemType': 'number' },
      tryType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.canTryVersions)) {
      $dara.Model.validateArray(this.canTryVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCanTrySasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCanTrySasResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BAA57***B7073A5C1
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
      data: GetCanTrySasResponseBodyData,
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

