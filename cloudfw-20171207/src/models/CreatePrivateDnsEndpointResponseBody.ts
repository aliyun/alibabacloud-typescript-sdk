// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateDnsEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 850A84D6************00090125EEB1
   */
  requestId?: string;
  /**
   * @example
   * 132
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

