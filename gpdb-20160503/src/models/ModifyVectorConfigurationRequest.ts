// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVectorConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable vector engine optimization. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * > *   We recommend that you **do not enable** vector engine optimization in mainstream analysis and real-time data warehousing scenarios.
   * > *   We recommend that you **enable** vector engine optimization in AI Generated Content (AIGC) and vector retrieval scenarios that require the vector analysis engine.
   * 
   * @example
   * enabled
   */
  vectorConfigurationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      vectorConfigurationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

