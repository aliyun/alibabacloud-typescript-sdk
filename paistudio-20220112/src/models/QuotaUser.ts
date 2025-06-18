// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaUserResources } from "./QuotaUserResources";


export class QuotaUser extends $dara.Model {
  resources?: QuotaUserResources;
  userId?: string;
  username?: string;
  workloadCount?: number;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      userId: 'UserId',
      username: 'Username',
      workloadCount: 'WorkloadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: QuotaUserResources,
      userId: 'string',
      username: 'string',
      workloadCount: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

