// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCheckInstanceResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckResult](~~ListCheckResult~~) operation to obtain the check item ID.
   * 
   * @example
   * 16
   */
  checkId?: number;
  /**
   * @remarks
   * The list of check item IDs.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of instance IDs of the affected assets under the check item.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The task source. Valid values:
   * 
   * - **YAO_CHI**: ApsaraDB console.
   * 
   * @example
   * YAO_CHI
   */
  taskSource?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkIds: 'CheckIds',
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      taskSource: 'TaskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkIds: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      taskSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

