// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyncMCPServerRequest extends $dara.Model {
  /**
   * @remarks
   * The AI gateway ID. This parameter is required. If this parameter is not specified, the API returns InvalidParameter.IsEmpty(400).
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The Nacos namespace ID. This parameter is required. If this parameter is not specified, the API returns InvalidParameter.IsEmpty(400).
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The Nacos service source ID. In a single Nacos source scenario, this parameter can be omitted because the server automatically populates the unique source. In a multi-Nacos source scenario, this parameter is required. Otherwise, a parameter error indicating that sourceId is empty is returned. If the gateway has no Nacos source, the error ErrServiceSourceNotFound is returned.
   * 
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

