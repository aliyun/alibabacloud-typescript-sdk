// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyDetailInfo extends $dara.Model {
  classId?: string;
  className?: string;
  config?: string;
  description?: string;
  name?: string;
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'classId',
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      name: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

