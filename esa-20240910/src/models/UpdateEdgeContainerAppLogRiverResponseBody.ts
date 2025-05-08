// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppLogRiverResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log path of the container.
   * 
   * @example
   * /root/hello.log
   */
  path?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42DE97FA-45D2-5615-9A31-55D9EC0D7563
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the standard output of the container is collected.
   * 
   * @example
   * true
   */
  stdout?: boolean;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      requestId: 'RequestId',
      stdout: 'Stdout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      requestId: 'string',
      stdout: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

