// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateRevisionStatus extends $dara.Model {
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
   * p-default
   */
  pipelineName?: string;
  /**
   * @example
   * https://cap.console.aliyun.com/template-detail?template=adasdasdaewe-adadqwe
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      packageUrl: 'packageUrl',
      phase: 'phase',
      pipelineName: 'pipelineName',
      templateUrl: 'templateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageUrl: 'string',
      phase: 'string',
      pipelineName: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

