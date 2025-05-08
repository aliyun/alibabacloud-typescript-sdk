// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataSlsConfigDetails extends $dara.Model {
  /**
   * @example
   * 500
   */
  gatewayId?: number;
  /**
   * @example
   * gw-61f465fa2dd044069e2208c4912*****
   */
  gatewayUniqueId?: string;
  /**
   * @example
   * ""
   */
  gmtCreate?: string;
  /**
   * @example
   * ""
   */
  gmtModified?: string;
  /**
   * @example
   * 0
   */
  id?: number;
  /**
   * @example
   * true
   */
  logOn?: boolean;
  /**
   * @example
   * mse_gw_access_log
   */
  logStoreName?: string;
  /**
   * @example
   * false
   */
  nginxCompatible?: boolean;
  /**
   * @example
   * test
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      logOn: 'LogOn',
      logStoreName: 'LogStoreName',
      nginxCompatible: 'NginxCompatible',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      logOn: 'boolean',
      logStoreName: 'string',
      nginxCompatible: 'boolean',
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

