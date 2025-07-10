// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectDashboardAccountResponseBody extends $dara.Model {
  /**
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @example
   * xxuser
   */
  dashboardUsername?: string;
  /**
   * @example
   * sbp-twmoe9bakow
   */
  projectId?: string;
  /**
   * @example
   * supabase_prod
   */
  projectName?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardPassword: 'DashboardPassword',
      dashboardUsername: 'DashboardUsername',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardPassword: 'string',
      dashboardUsername: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

