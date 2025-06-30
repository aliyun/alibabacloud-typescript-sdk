// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventTypesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
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
   * The type of anomalous event for which you want to query the anomalous events of subtypes. Valid values:
   * 
   * *   **01**: anomalous permission usage
   * *   **02**: anomalous data flow
   * *   **03**: anomalous data operation
   * 
   * @example
   * 01
   */
  parentTypeId?: number;
  /**
   * @remarks
   * The type of the resource. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 5
   */
  resourceId?: number;
  /**
   * @remarks
   * The status of the anomalous event. Valid values:
   * 
   * *   **1**: enabled
   * *   **2**: disabled
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

