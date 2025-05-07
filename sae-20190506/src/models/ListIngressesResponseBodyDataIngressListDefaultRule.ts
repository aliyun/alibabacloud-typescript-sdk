// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIngressesResponseBodyDataIngressListDefaultRule extends $dara.Model {
  appId?: string;
  appName?: string;
  backendProtocol?: string;
  containerPort?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

