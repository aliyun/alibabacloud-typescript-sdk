// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertPrepayInstanceRequestConvertPrepayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class ConvertPrepayInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  convertPrepayInstanceRequest?: ConvertPrepayInstanceRequestConvertPrepayInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      convertPrepayInstanceRequest: 'ConvertPrepayInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertPrepayInstanceRequest: ConvertPrepayInstanceRequestConvertPrepayInstanceRequest,
    };
  }

  validate() {
    if(this.convertPrepayInstanceRequest && typeof (this.convertPrepayInstanceRequest as any).validate === 'function') {
      (this.convertPrepayInstanceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

