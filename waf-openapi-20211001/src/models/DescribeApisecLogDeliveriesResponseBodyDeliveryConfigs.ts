// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecLogDeliveriesResponseBodyDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The type of the log subscription. Valid values:
   * 
   * *   **risk**: risk information.
   * *   **event**: attack event information.
   * *   **asset**: asset information.
   * 
   * @example
   * risk
   */
  assertKey?: string;
  /**
   * @remarks
   * The ID of the region where logs are stored.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * apisec-logstore***
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project in Simple Log Service.
   * 
   * @example
   * apisec-project-14316572********
   */
  projectName?: string;
  /**
   * @remarks
   * The status of API security log subscription. Valid values:
   * 
   * *   **true**: enabled.
   * *   **false**: disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      assertKey: 'AssertKey',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertKey: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      projectName: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

