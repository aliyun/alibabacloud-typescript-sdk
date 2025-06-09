// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails } from "./DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails";


export class DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResources extends $dara.Model {
  details?: DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails[];
  /**
   * @example
   * CertExpired
   */
  reason?: string;
  /**
   * @example
   * lb-***
   */
  resourceInstanceId?: string;
  /**
   * @example
   * test-name
   */
  resourceInstanceName?: string;
  /**
   * @example
   * 80
   */
  resourceInstancePort?: number;
  /**
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      reason: 'Reason',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourceInstancePort: 'ResourceInstancePort',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeAbnormalCloudResourcesResponseBodyAbnormalCloudResourcesDetails },
      reason: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourceInstancePort: 'number',
      resourceProduct: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

