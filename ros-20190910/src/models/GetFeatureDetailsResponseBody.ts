// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyDriftDetection } from "./GetFeatureDetailsResponseBodyDriftDetection";
import { GetFeatureDetailsResponseBodyResourceCleaner } from "./GetFeatureDetailsResponseBodyResourceCleaner";
import { GetFeatureDetailsResponseBodyResourceImport } from "./GetFeatureDetailsResponseBodyResourceImport";
import { GetFeatureDetailsResponseBodyTemplateParameterConstraints } from "./GetFeatureDetailsResponseBodyTemplateParameterConstraints";
import { GetFeatureDetailsResponseBodyTemplateScratch } from "./GetFeatureDetailsResponseBodyTemplateScratch";
import { GetFeatureDetailsResponseBodyTerraform } from "./GetFeatureDetailsResponseBodyTerraform";


export class GetFeatureDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the drift detection feature.
   */
  driftDetection?: GetFeatureDetailsResponseBodyDriftDetection;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBF833DA-D0E2-52BE-92E2-59CA56BE834E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource cleaner feature.
   */
  resourceCleaner?: GetFeatureDetailsResponseBodyResourceCleaner;
  /**
   * @remarks
   * Details of the resource import feature.
   */
  resourceImport?: GetFeatureDetailsResponseBodyResourceImport;
  /**
   * @remarks
   * Details of the template parameter constraint feature.
   */
  templateParameterConstraints?: GetFeatureDetailsResponseBodyTemplateParameterConstraints;
  /**
   * @remarks
   * Details of the scenario feature.
   */
  templateScratch?: GetFeatureDetailsResponseBodyTemplateScratch;
  /**
   * @remarks
   * Details of the Terraform hosting feature.
   */
  terraform?: GetFeatureDetailsResponseBodyTerraform;
  static names(): { [key: string]: string } {
    return {
      driftDetection: 'DriftDetection',
      requestId: 'RequestId',
      resourceCleaner: 'ResourceCleaner',
      resourceImport: 'ResourceImport',
      templateParameterConstraints: 'TemplateParameterConstraints',
      templateScratch: 'TemplateScratch',
      terraform: 'Terraform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetection: GetFeatureDetailsResponseBodyDriftDetection,
      requestId: 'string',
      resourceCleaner: GetFeatureDetailsResponseBodyResourceCleaner,
      resourceImport: GetFeatureDetailsResponseBodyResourceImport,
      templateParameterConstraints: GetFeatureDetailsResponseBodyTemplateParameterConstraints,
      templateScratch: GetFeatureDetailsResponseBodyTemplateScratch,
      terraform: GetFeatureDetailsResponseBodyTerraform,
    };
  }

  validate() {
    if(this.driftDetection && typeof (this.driftDetection as any).validate === 'function') {
      (this.driftDetection as any).validate();
    }
    if(this.resourceCleaner && typeof (this.resourceCleaner as any).validate === 'function') {
      (this.resourceCleaner as any).validate();
    }
    if(this.resourceImport && typeof (this.resourceImport as any).validate === 'function') {
      (this.resourceImport as any).validate();
    }
    if(this.templateParameterConstraints && typeof (this.templateParameterConstraints as any).validate === 'function') {
      (this.templateParameterConstraints as any).validate();
    }
    if(this.templateScratch && typeof (this.templateScratch as any).validate === 'function') {
      (this.templateScratch as any).validate();
    }
    if(this.terraform && typeof (this.terraform as any).validate === 'function') {
      (this.terraform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

