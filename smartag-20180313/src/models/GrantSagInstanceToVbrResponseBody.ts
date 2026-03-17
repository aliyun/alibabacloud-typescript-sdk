// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSagInstanceToVbrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization.
   * 
   * @example
   * sgv-3x8djyem7vqh70****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 49CEBB2B-9E5C-4789-8A29-3255A56A67B1
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

