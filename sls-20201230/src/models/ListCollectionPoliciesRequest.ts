// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionPoliciesRequest extends $dara.Model {
  /**
   * @example
   * your-central-project1
   */
  centralProject?: string;
  /**
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @example
   * your-test-bucket1
   */
  instanceId?: string;
  /**
   * @example
   * 0
   */
  offset?: number;
  /**
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      centralProject: 'centralProject',
      dataCode: 'dataCode',
      instanceId: 'instanceId',
      offset: 'offset',
      policyName: 'policyName',
      productCode: 'productCode',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centralProject: 'string',
      dataCode: 'string',
      instanceId: 'string',
      offset: 'number',
      policyName: 'string',
      productCode: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

