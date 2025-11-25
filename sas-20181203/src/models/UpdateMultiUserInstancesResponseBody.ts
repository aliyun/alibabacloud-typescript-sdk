// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiUserInstancesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ****185894****
   */
  aliUid?: number;
  /**
   * @example
   * Failed to update multi-user instance configuration
   */
  errorMessage?: string;
  /**
   * @example
   * sas-p0anpb26****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      errorMessage: 'string',
      instanceId: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMultiUserInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  result?: UpdateMultiUserInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateMultiUserInstancesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

