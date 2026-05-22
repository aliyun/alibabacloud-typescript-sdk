// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppLogRiverRequest extends $dara.Model {
  appId?: string;
  path?: string;
  stdout?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      path: 'Path',
      stdout: 'Stdout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      path: 'string',
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

