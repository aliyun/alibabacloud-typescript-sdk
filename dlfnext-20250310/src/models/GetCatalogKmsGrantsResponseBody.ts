// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogKmsGrantsResponseBody extends $dara.Model {
  dataAccessRoleArn?: string;
  keyPolicyStatement?: string;
  region?: string;
  workflowRoleArn?: string;
  static names(): { [key: string]: string } {
    return {
      dataAccessRoleArn: 'dataAccessRoleArn',
      keyPolicyStatement: 'keyPolicyStatement',
      region: 'region',
      workflowRoleArn: 'workflowRoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAccessRoleArn: 'string',
      keyPolicyStatement: 'string',
      region: 'string',
      workflowRoleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

