// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProbeProbeHandlerHttpGetHttpHeaders } from "./ProbeProbeHandlerHttpGetHttpHeaders";


export class ProbeProbeHandlerHttpGet extends $dara.Model {
  httpHeaders?: ProbeProbeHandlerHttpGetHttpHeaders[];
  path?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      httpHeaders: 'httpHeaders',
      path: 'path',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeaders: { 'type': 'array', 'itemType': ProbeProbeHandlerHttpGetHttpHeaders },
      path: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.httpHeaders)) {
      $dara.Model.validateArray(this.httpHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

