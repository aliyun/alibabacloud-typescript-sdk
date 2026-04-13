// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDeploymentsRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  configVersion?: string;
  /**
   * @example
   * production
   */
  deploymentName?: string;
  /**
   * @example
   * 1
   */
  deploymentNo?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * Applied
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configVersion: 'configVersion',
      deploymentName: 'deploymentName',
      deploymentNo: 'deploymentNo',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configVersion: 'string',
      deploymentName: 'string',
      deploymentNo: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

