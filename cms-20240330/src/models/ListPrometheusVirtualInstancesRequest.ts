// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances to return per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The optional cloud services.
   * 
   * @example
   * ack-csi-fuse
   */
  namespace?: string;
  /**
   * @remarks
   * The next token for the paging query.
   * 
   * @example
   * a1b2c3d4e5f60718293a4b5c6d7e****8f9a0b1c2d3e4f508f9a0b1c2d3e4f508f9a0b1c2d3e4f50
   */
  nextToken?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567890123456
   */
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

