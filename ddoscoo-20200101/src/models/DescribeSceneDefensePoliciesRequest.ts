// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSceneDefensePoliciesRequest extends $dara.Model {
  resourceGroupId?: string;
  status?: string;
  template?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      status: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

