// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOriginPoolRequestOriginsAuthConf } from "./CreateOriginPoolRequestOriginsAuthConf";


export class CreateOriginPoolRequestOrigins extends $dara.Model {
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
   * Authentication information, required when the origin is OSS or S3 and needs authentication, including related configuration details.
   */
  authConf?: CreateOriginPoolRequestOriginsAuthConf;
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
   * The request header to be included when fetching from the origin, only Host is supported.
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
   * The name of the origin, which must be unique within an origin address.
   * 
   * @example
   * origin1
   */
  name?: string;
  /**
   * @remarks
   * The type of the origin:
   * 
   * - ip_domain: IP or domain name type origin;
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
      name: 'Name',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      authConf: CreateOriginPoolRequestOriginsAuthConf,
      enabled: 'boolean',
      header: 'any',
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

