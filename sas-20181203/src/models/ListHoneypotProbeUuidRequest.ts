// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotProbeUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management node.
   * 
   * >  You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to obtain the ID.
   * 
   * @example
   * a882e590-b87b-45a6-87b9-d0a3e5a0****
   */
  controlNodeId?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   **host_probe**: host probe
   * *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  static names(): { [key: string]: string } {
    return {
      controlNodeId: 'ControlNodeId',
      lang: 'Lang',
      probeType: 'ProbeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlNodeId: 'string',
      lang: 'string',
      probeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

