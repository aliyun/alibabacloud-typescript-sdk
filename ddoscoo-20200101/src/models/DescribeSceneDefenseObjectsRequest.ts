// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefenseObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

