// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataLogConfigDetails extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Log Service is activated.
   * 
   * @example
   * true
   */
  logEnabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * mse_access_log
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * k8s-log-c173117256e934a96b7fefdf2ef8a8057
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logEnabled: 'LogEnabled',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logEnabled: 'boolean',
      logStoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

