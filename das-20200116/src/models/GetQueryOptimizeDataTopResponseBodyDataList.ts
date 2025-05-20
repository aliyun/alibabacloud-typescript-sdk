// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataTopResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * * **sqlExecuteCount**: the number of slow SQL executions.
   * * **optimizedSqlExecuteCount**: the number of slow SQL executions that need to be optimized.
   * 
   * @example
   * sqlExecuteCount
   */
  type?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

