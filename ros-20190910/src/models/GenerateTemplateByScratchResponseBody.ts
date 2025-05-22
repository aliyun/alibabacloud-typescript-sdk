// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateTemplateByScratchResponseBodyResourcesToImport } from "./GenerateTemplateByScratchResponseBodyResourcesToImport";


export class GenerateTemplateByScratchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D22C1D13-D74E-558C-AF68-1B4C05FA6F1A
   */
  requestId?: string;
  /**
   * @remarks
   * The resources that you want to import into a stack in the resource management scenario.
   * 
   * > This parameter is returned only for a resource management scenario.
   */
  resourcesToImport?: GenerateTemplateByScratchResponseBodyResourcesToImport[];
  /**
   * @remarks
   * The template content of the resource scenario.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"ECSVPC_001\\": {\\"DeletionPolicy\\": \\"Retain\\", \\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"CidrBlock\\": \\"172.16.0.0/12\\", \\"VpcName\\": \\"MyTestVpc\\", \\"EnableIpv6\\": false}}}}
   */
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcesToImport: 'ResourcesToImport',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': GenerateTemplateByScratchResponseBodyResourcesToImport },
      templateBody: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcesToImport)) {
      $dara.Model.validateArray(this.resourcesToImport);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

