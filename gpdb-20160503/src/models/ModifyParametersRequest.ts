// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the instance. Valid values:
   * 
   * - **true**: Forcibly restarts the instance.
   * - **false** (default): Does not forcibly restart the instance.
   * 
   * @example
   * false
   */
  forceRestartInstance?: boolean;
  /**
   * @remarks
   * The names and values of the parameters to be modified. The format is `<ParameterName>:<ParameterValue>`.
   * 
   * You can call the [DescribeParameters](https://help.aliyun.com/document_detail/208310.html) operation to query the configuration parameters that can be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * {"statement_timeout":"11800010"}
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      forceRestartInstance: 'ForceRestartInstance',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      forceRestartInstance: 'boolean',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

