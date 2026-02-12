// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceCreateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you created.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The edition of the instance that you created. Valid value:
   * 
   * *   **1**: Standard Edition instances
   * 
   * @example
   * 1
   */
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: OnsInstanceCreateResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
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
      data: OnsInstanceCreateResponseBodyData,
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

