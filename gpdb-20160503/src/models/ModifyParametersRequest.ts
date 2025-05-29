// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
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
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  forceRestartInstance?: boolean;
  /**
   * @remarks
   * The name and value of the parameter to be modified. Specify the parameter in the `<Parameter name>:<Parameter value>` format.
   * 
   * You can call the [DescribeParameters](https://help.aliyun.com/document_detail/208310.html) operation to query the parameters that can be modified.
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

