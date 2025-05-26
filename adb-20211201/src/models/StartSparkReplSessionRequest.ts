// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSparkReplSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters that are used to start the Spark session, which are in the JSON format. For more information, see [Spark application configuration parameters](https://help.aliyun.com/document_detail/471203.html).
   * 
   * This parameter is required.
   * 
   * @example
   * { "spark.shuffle.timeout": ":0s" }
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1mfe9qm****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

