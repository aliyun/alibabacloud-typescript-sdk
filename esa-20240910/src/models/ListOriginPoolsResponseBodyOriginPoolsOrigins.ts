// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf } from "./ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf";


export class ListOriginPoolsResponseBodyOriginPoolsOrigins extends $dara.Model {
  /**
   * @remarks
   * Origin address, e.g., www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * Authentication information. When the origin is OSS or S3 and requires authentication, you need to provide related configuration information for authentication.
   */
  authConf?: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf;
  /**
   * @remarks
   * Whether the origin is enabled:
   * 
   * - true: Enabled;
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The request header to be carried during back-to-origin, only supports Host.
   * 
   * @example
   * {
   *         "Host": [
   *           "example.com"
   *         ]
   *       }
   */
  header?: any;
  /**
   * @remarks
   * Origin ID.
   * 
   * @example
   * 997502094872132
   */
  id?: number;
  /**
   * @remarks
   * Origin name.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * Origin type:
   * - ip_domain: IP or domain type origin; 
   * - OSS: OSS address origin; 
   * - S3: AWS S3 origin.
   * 
   * @example
   * S3
   */
  type?: string;
  /**
   * @remarks
   * Weight, an integer between 0 and 100.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      authConf: 'AuthConf',
      enabled: 'Enabled',
      header: 'Header',
      id: 'Id',
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: ListOriginPoolsResponseBodyOriginPoolsOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
      id: 'number',
      name: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.authConf && typeof (this.authConf as any).validate === 'function') {
      (this.authConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

