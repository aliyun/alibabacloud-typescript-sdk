// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRisksRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The baseline ID.
   * 
   * >  You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to query the baseline IDs.
   * 
   * @example
   * 75
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * docker
   */
  riskName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      limit: 'Limit',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskId: 'RiskId',
      riskName: 'RiskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      limit: 'number',
      resourceDirectoryAccountId: 'number',
      riskId: 'number',
      riskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

