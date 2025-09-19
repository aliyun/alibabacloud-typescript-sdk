// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefaultProxyInstallVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default installation version.
   * 
   * @example
   * proxy_01_03
   */
  installVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9FCB51A-5078-5D31-9C4D-3B25BEF068C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      installVersion: 'InstallVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

