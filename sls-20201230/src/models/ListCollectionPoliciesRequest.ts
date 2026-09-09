// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollectionPoliciesRequest extends $dara.Model {
  centralProject?: string;
  /**
   * @remarks
   * The code of the log type.
   * 
   * @example
   * access_log
   */
  dataCode?: string;
  /**
   * @remarks
   * The instance ID. Specify this parameter to query rules that match a specific instance. If you use this parameter, you must also specify productCode and dataCode.
   * 
   * @example
   * your-test-bucket1
   */
  instanceId?: string;
  offset?: number;
  /**
   * @remarks
   * The name of the collection rule.
   * 
   * @example
   * your_log_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The code of the Alibaba Cloud service.
   * 
   * @example
   * oss
   */
  productCode?: string;
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

