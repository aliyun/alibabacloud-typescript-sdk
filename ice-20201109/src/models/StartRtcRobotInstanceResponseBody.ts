// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcRobotInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 727dc0e296014bb58670940a3da95592
   */
  instanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11DE0AB3-603B-5055-8A72-9C424854F983
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

