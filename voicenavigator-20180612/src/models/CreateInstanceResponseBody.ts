// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the newly created intelligent navigation scenario.
   * 
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate and troubleshoot issues.
   * 
   * @example
   * 01A1C878-63EC-50EF-B7A0-024F98B09129
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

