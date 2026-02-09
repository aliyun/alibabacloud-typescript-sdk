// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiVersionInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable versioning.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The key in the specified header when the header versioning solution is used.
   * 
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @remarks
   * The key in the specified query parameter when the query versioning solution is used.
   * 
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @remarks
   * The versioning solution.
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

