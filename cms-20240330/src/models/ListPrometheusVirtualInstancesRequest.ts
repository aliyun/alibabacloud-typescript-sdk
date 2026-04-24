// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesRequest extends $dara.Model {
  maxResults?: number;
  /**
   * @remarks
   * Optional cloud product
   * 
   * @example
   * ack-csi-fuse
   */
  namespace?: string;
  nextToken?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      namespace: 'namespace',
      nextToken: 'nextToken',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      namespace: 'string',
      nextToken: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

