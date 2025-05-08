// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRegistrationResponseBodyDetail extends $dara.Model {
  /**
   * @remarks
   * Whether risk exists.
   * 
   * @example
   * true
   */
  atRisk?: boolean;
  /**
   * @remarks
   * Whether service is associated with artifact.
   * 
   * @example
   * true
   */
  hasRelatedArtifact?: boolean;
  /**
   * @remarks
   * The reports.
   * 
   * @example
   * { "template1":"https://compute-nest-security-audit-bucket.oss-cn-hangzhou.aliyuncs.com/report" }
   */
  reports?: string;
  /**
   * @remarks
   * The url of template diff file.
   * 
   * @example
   * https://compute-nest-template-diff-bucket.oss-cn-hangzhou.aliyuncs.com/service-abc/diff
   */
  templateDiffUrl?: string;
  static names(): { [key: string]: string } {
    return {
      atRisk: 'AtRisk',
      hasRelatedArtifact: 'HasRelatedArtifact',
      reports: 'Reports',
      templateDiffUrl: 'TemplateDiffUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atRisk: 'boolean',
      hasRelatedArtifact: 'boolean',
      reports: 'string',
      templateDiffUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

