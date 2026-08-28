// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyncMCPServerRequest extends $dara.Model {
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * public
   */
  namespace?: string;
  /**
   * @example
   * src-xxxx
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      namespace: 'namespace',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      namespace: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

