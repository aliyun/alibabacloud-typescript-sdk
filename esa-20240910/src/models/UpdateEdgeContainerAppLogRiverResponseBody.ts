// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppLogRiverResponseBody extends $dara.Model {
  path?: string;
  requestId?: string;
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

