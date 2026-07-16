// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item ID of the collector access object in the multi-cloud configuration.
   * 
   * @example
   * Opera20_Salesforce_Prod
   */
  authConfigId?: string;
  /**
   * @remarks
   * The cloud service to which the authentication configuration belongs.
   * 
   * @example
   * salesForceRestAPI
   */
  authConfigProduct?: string;
  /**
   * @remarks
   * The authentication vendor name.
   * 
   * @example
   * SALESFORCE
   */
  authConfigVendor?: string;
  /**
   * @remarks
   * The configuration information of the collector.
   * 
   * @example
   * {\\"regionId\\":\\"cn-hangzhou\\",\\"bucket\\":\\"actiontrail-logs-1481501495248334-d776c375\\",\\"format\\":{\\"type\\":\\"JSON\\"},\\"encoding\\":\\"UTF-8\\",\\"compressFormat\\":\\"autoDetect\\",\\"interval\\":\\"5m\\"}
   */
  dataConnectorConfig?: string;
  /**
   * @remarks
   * The collector ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-07423146117d77db266f78bc41f4fd80
   */
  dataConnectorId?: string;
  /**
   * @remarks
   * The status of the collector. Valid values:
   * - enabled: enabled.
   * - disabled: disabled.
   * 
   * @example
   * enabled
   */
  dataConnectorStatus?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets belong to the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Your assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account that the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      authConfigId: 'AuthConfigId',
      authConfigProduct: 'AuthConfigProduct',
      authConfigVendor: 'AuthConfigVendor',
      dataConnectorConfig: 'DataConnectorConfig',
      dataConnectorId: 'DataConnectorId',
      dataConnectorStatus: 'DataConnectorStatus',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigId: 'string',
      authConfigProduct: 'string',
      authConfigVendor: 'string',
      dataConnectorConfig: 'string',
      dataConnectorId: 'string',
      dataConnectorStatus: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

