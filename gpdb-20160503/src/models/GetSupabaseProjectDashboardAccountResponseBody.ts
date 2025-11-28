// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectDashboardAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The username for accessing the project\\"s dashboard.
   * 
   * @example
   * xxpassword
   */
  dashboardPassword?: string;
  /**
   * @remarks
   * The password associated with the dashboard username.
   * 
   * @example
   * xxuser
   */
  dashboardUsername?: string;
  /**
   * @remarks
   * The ID of the Supabase project.
   * 
   * @example
   * sbp-twmoe9bakow
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the Supabase project.
   * 
   * @example
   * supabase_prod
   */
  projectName?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
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

