// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContainerGroupRequestInitContainerPort extends $dara.Model {
  /**
   * @remarks
   * The port number of the init container. Valid values: 1 to 65535.
   * 
   * @example
   * 9000
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the init container. Valid values: TCP and UDP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
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

