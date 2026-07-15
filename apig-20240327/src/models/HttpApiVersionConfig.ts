// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiVersionConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether versioning control is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The key in the specified header parameter when the header-based versioning scheme is used.
   * 
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @remarks
   * The key in the specified query parameter when the query parameter-based versioning scheme is used.
   * 
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @remarks
   * The versioning scheme.
   * 
   * @example
   * Query
   */
  scheme?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      headerName: 'headerName',
      queryName: 'queryName',
      scheme: 'scheme',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      headerName: 'string',
      queryName: 'string',
      scheme: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

