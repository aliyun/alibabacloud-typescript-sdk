// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of jobs to terminate. The instanceId is obtained from the job instance ID returned by ListJobInfos, and the projectName is obtained from the project name returned by ListProjects.
   * 
   * @example
   * [
   *       {
   *             "instanceId": "",
   *             "projectName": ""
   *       },
   *       {
   *             "instanceId": "",
   *             "projectName": ""
   *       }
   * ]
   */
  body?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 478403690625249
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

