// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * To construct the request payload, you can replicate the add data source process in the Quick BI console. On the Add Data Source page, when you click Test Connection, the restapi/datasource/detect API is called. Use this API call\\"s payload as a template, ensuring that the provided userId and workspaceId exist in your Quick BI environment.
   * >Notice: A few data source types are not supported. If your parameters match the test API request payload but the request still fails, the data source type is likely not supported by this OpenAPI.
   * >Notice: Do not include the `encode` field in your request. This API does not support creating data sources in encrypted mode or using authentication methods that require file uploads.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "userId": "235345xxxxx24336",
   *   "workspaceId": "235345xxxxx24336",
   *   "dsType": "postgresql",
   *   "config": {
   *     "category": "local",
   *     "customDriverId": null,
   *     "ssl": false,
   *     "uploadFile": true,
   *     "sslConfig": null
   *   },
   *   "showName": "test",
   *   "address": "test",
   *   "port": "5432",
   *   "instance": "postgres",
   *   "schema": "public",
   *   "userName": "13****34",
   *   "password": "12****425",
   * }
   */
  addModel?: string;
  static names(): { [key: string]: string } {
    return {
      addModel: 'AddModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

