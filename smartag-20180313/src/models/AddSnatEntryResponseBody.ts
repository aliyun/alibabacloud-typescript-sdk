// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSnatEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the SNAT instance.
   * 
   * @example
   * snat-m2obgkt5ya1puz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56BF6C79-C77D-41A0-86DD-A4B156E784EA
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

