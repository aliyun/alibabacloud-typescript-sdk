// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceRequestDeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223493C7-FCA9-13D4-B75B-AF8B32F4****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteInstanceRequest?: DeleteInstanceRequestDeleteInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      deleteInstanceRequest: 'DeleteInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteInstanceRequest: DeleteInstanceRequestDeleteInstanceRequest,
    };
  }

  validate() {
    if(this.deleteInstanceRequest && typeof (this.deleteInstanceRequest as any).validate === 'function') {
      (this.deleteInstanceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

