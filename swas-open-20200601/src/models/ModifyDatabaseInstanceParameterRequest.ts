// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseInstanceParameterRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. You must ensure that the token is unique for each request. It can contain only ASCII characters and cannot be longer than 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to restart the database for the parameter changes to take effect. Valid values:
   * 
   * - true: Forces a restart. Set this to true if any modified parameter requires a restart to take effect. Otherwise, the change will not take effect.
   * 
   * - false: Do not force a restart.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * A JSON string that specifies the database parameters and their values. The value for each parameter must be a string. Format: `{"ParameterName1":"Value1","ParameterName2":"Value2",...}`.
   * 
   * This parameter is required.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the database instance. Call [ListRegions](https://help.aliyun.com/document_detail/189315.html) to view the supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      forceRestart: 'ForceRestart',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      forceRestart: 'boolean',
      parameters: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

