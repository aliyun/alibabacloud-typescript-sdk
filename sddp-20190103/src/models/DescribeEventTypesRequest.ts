// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTypesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the parent anomalous activity type to which the child anomalous activity type belongs. Valid values:
   * 
   * - **01**: anomalous permission access.
   * 
   * - **02**: anomalous data flow.
   * 
   * - **03**: anomalous data operation.
   * 
   * @example
   * 01
   */
  parentTypeId?: number;
  /**
   * @remarks
   * The resource type of the product. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: Object Storage Service (OSS).
   * 
   * - **3**: AnalyticDB for MySQL.
   * 
   * - **4**: Tablestore.
   * 
   * - **5**. ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  resourceId?: number;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **1**: active.
   * 
   * - **2**: inactive.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      parentTypeId: 'ParentTypeId',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      lang: 'string',
      parentTypeId: 'number',
      resourceId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

