// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOriginPoolResponseBodyOriginsAuthConf } from "./GetOriginPoolResponseBodyOriginsAuthConf";


export class GetOriginPoolResponseBodyOrigins extends $dara.Model {
  /**
   * @remarks
   * The address of the origin, e.g., www.example.com.
   * 
   * @example
   * www.example.com
   */
  address?: string;
  /**
   * @remarks
   * Authentication information. When the origin is an OSS or S3, and authentication is required, you need to provide the relevant configuration information.
   */
  authConf?: GetOriginPoolResponseBodyOriginsAuthConf;
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
   * The request header to be included when fetching from the origin, only supports Host.
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
   * The ID of the origin.
   * 
   * @example
   * 99750209487****
   */
  id?: number;
  /**
   * @remarks
   * The name of the origin.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin:
   * 
   * - ip_domain: IP or domain type origin;
   * - OSS: OSS address origin;
   * - S3: AWS S3 origin.
   * 
   * @example
   * ip_domain
   */
  type?: string;
  /**
   * @remarks
   * The weight, an integer between 0 and 100.
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
      authConf: GetOriginPoolResponseBodyOriginsAuthConf,
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

