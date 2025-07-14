// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeProbeHandlerHttpGetHttpHeaders extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ProbeProbeHandlerTcpSocket extends $dara.Model {
  port?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeProbeHandler extends $dara.Model {
  httpGet?: ProbeProbeHandlerHttpGet;
  tcpSocket?: ProbeProbeHandlerTcpSocket;
  static names(): { [key: string]: string } {
    return {
      httpGet: 'httpGet',
      tcpSocket: 'tcpSocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpGet: ProbeProbeHandlerHttpGet,
      tcpSocket: ProbeProbeHandlerTcpSocket,
    };
  }

  validate() {
    if(this.httpGet && typeof (this.httpGet as any).validate === 'function') {
      (this.httpGet as any).validate();
    }
    if(this.tcpSocket && typeof (this.tcpSocket as any).validate === 'function') {
      (this.tcpSocket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Probe extends $dara.Model {
  failureThreshold?: number;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  probeHandler?: ProbeProbeHandler;
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      probeHandler: 'probeHandler',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      probeHandler: ProbeProbeHandler,
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(this.probeHandler && typeof (this.probeHandler as any).validate === 'function') {
      (this.probeHandler as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

