// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesRequest extends $dara.Model {
  /**
   * @example
   * ack-csi-fuse
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

