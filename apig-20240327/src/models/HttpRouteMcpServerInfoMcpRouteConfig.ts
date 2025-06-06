// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpRouteMcpServerInfoMcpRouteConfig extends $dara.Model {
  exposedUriPath?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      exposedUriPath: 'exposedUriPath',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposedUriPath: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

