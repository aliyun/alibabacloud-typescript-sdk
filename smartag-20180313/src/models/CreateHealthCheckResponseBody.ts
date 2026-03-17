// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHealthCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the health check.
   * 
   * @example
   * hc-rrqoucina3gmpn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E38E950D-28A4-4C41-9428-A8908EC6AE5C
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

