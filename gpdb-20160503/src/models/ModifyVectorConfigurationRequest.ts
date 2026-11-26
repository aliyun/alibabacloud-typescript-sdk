// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVectorConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the vector engine optimization configuration. Valid values:
   * 
   * - **enabled**: Enables vector engine optimization.
   * - **disabled**: Disables vector engine optimization.
   * 
   * > - For mainstream analytics, data warehouse, and real-time data warehouse scenarios, **do not enable** vector engine optimization.
   * - For users who use the vector analysis engine for AIGC and vector retrieval scenarios, **enable** vector engine optimization.
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

