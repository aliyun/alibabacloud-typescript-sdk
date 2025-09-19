// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHoneypotResponseBodyData extends $dara.Model {
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
   * 9bf8cd373112263d4bc102fc5dba9d9f812ee05d4d35c487d330d52e937f****
   */
  honeypotId?: string;
  /**
   * @remarks
   * The display name of the image.
   * 
   * @example
   * RuoYi
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The name of the image that is used for the honeypot.
   * 
   * @example
   * ruoyi
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
   * 868a7579-00b5-4a74-999d-8bd3f411****
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

export class ResetHoneypotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the honeypot.
   */
  data?: ResetHoneypotResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A57C711B-AA15-55B2-8F61-4D09CEXXXXX
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
      data: ResetHoneypotResponseBodyData,
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

