// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyBindingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data sources that you want to disassociate from the backup policy.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * The ID of the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * po-000************hgp
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **UDM_ECS**: ECS instance backup
   * 
   * @example
   * UDM_ECS
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      policyId: 'PolicyId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      policyId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

