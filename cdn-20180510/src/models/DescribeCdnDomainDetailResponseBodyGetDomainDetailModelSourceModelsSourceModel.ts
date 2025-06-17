// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainDetailResponseBodyGetDomainDetailModelSourceModelsSourceModel extends $dara.Model {
  /**
   * @remarks
   * The address of the origin server.
   * 
   * @example
   * example.com
   */
  content?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * online
   */
  enabled?: string;
  /**
   * @remarks
   * The port over which requests are redirected to the origin server. Ports 443 and 80 are supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 20
   */
  priority?: string;
  /**
   * @remarks
   * The type of the origin server. Valid values:
   * 
   * *   **ipaddr**: an origin IP address
   * *   **domain**: an origin domain name
   * *   **oss**: the domain name of an Object Storage Service (OSS) bucket
   * *   **fc_domain:** a Function Compute domain name
   * 
   * @example
   * domain
   */
  type?: string;
  /**
   * @remarks
   * The weight of the origin server if multiple origin servers have been specified.
   * 
   * @example
   * 10
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      enabled: 'Enabled',
      port: 'Port',
      priority: 'Priority',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      enabled: 'string',
      port: 'number',
      priority: 'string',
      type: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

