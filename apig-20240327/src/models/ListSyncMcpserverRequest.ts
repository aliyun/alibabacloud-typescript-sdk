// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSyncMCPServerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway. Note: This parameter is required. If it is not provided, the API returns InvalidParameter.IsEmpty(400).
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The Nacos namespace ID. Note: This parameter is required. If it is not provided, the API returns InvalidParameter.IsEmpty(400).
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The Nacos service source ID. This parameter can be omitted in single Nacos source scenarios because the server automatically populates the unique source. It is required in multiple Nacos source scenarios. Otherwise, a parameter error indicating that sourceId is empty is returned. If the gateway has no Nacos source, ErrServiceSourceNotFound is returned.
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

