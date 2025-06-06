// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateStatusLatestDeployment } from "./TemplateStatusLatestDeployment";


export class TemplateStatus extends $dara.Model {
  latestDeployment?: TemplateStatusLatestDeployment;
  /**
   * @example
   * 1.0.0
   */
  latestVersion?: string;
  /**
   * @example
   * https://registry.serverless-devs.com/details.html?name=template-test&package_type=v3
   */
  packageUrl?: string;
  /**
   * @example
   * Published
   */
  phase?: string;
  /**
   * @example
   * https://cap.console.aliyun.com/template-detail?template=adasdasdaewe-adadqwe
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      latestDeployment: 'latestDeployment',
      latestVersion: 'latestVersion',
      packageUrl: 'packageUrl',
      phase: 'phase',
      templateUrl: 'templateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestDeployment: TemplateStatusLatestDeployment,
      latestVersion: 'string',
      packageUrl: 'string',
      phase: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    if(this.latestDeployment && typeof (this.latestDeployment as any).validate === 'function') {
      (this.latestDeployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

