// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppLogRiverResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log path of the container. It must be an absolute path that starts with a forward slash (/). You can use asterisks (\\*) and question marks (?) as wildcards.
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
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the standard output of the container is collected.
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

