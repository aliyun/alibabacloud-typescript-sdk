// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiVersionConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * my-version
   */
  headerName?: string;
  /**
   * @example
   * myVersion
   */
  queryName?: string;
  /**
   * @example
   * Query
   */
  scheme?: string;
  /**
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

