// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartHoneypotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the management node to which the honeypot belongs.
   * 
   * @example
   * managerNodename
   */
  controlNodeName?: string;
  /**
   * @remarks
   * The ID of the honeypot.
   * 
   * @example
   * 123
   */
  honeypotId?: string;
  /**
   * @remarks
   * The display name of the image.
   * 
   * @example
   * Webmin
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the image that is used for the honeypot.
   * 
   * @example
   * tcp_proxy
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The custom name of the honeypot.
   * 
   * @example
   * ruoyi
   */
  honeypotName?: string;
  /**
   * @remarks
   * The ID of the management node.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the custom configuration for the honeypot.
   * 
   * @example
   * ddh3731641137fe4b72b245346a2721d4b6tdgg3731641137fe4b72b245346a2721***
   */
  presetId?: string;
  /**
   * @remarks
   * The statuses of the honeypots.
   */
  state?: string[];
  static names(): { [key: string]: string } {
    return {
      controlNodeName: 'ControlNodeName',
      honeypotId: 'HoneypotId',
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageName: 'HoneypotImageName',
      honeypotName: 'HoneypotName',
      nodeId: 'NodeId',
      presetId: 'PresetId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNodeName: 'string',
      honeypotId: 'string',
      honeypotImageDisplayName: 'string',
      honeypotImageName: 'string',
      honeypotName: 'string',
      nodeId: 'string',
      presetId: 'string',
      state: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.state)) {
      $dara.Model.validateArray(this.state);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartHoneypotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the honeypot.
   */
  data?: StartHoneypotResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartHoneypotResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

