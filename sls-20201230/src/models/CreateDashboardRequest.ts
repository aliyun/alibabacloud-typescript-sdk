// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Dashboard } from "./Dashboard";


export class CreateDashboardRequest extends $dara.Model {
  /**
   * @remarks
   * The data structure of the dashboard.
   * 
   * This parameter is required.
   */
  body?: Dashboard;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Dashboard,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

