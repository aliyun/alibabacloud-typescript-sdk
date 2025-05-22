// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackTemplateByResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The template content after correction.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"Vpc\\": {\\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"VpcName\\": \\"test\\", \\"CidrBlock\\": \\"192.168.0.0/16\\", \\"Description\\": \\"test2\\"}}}, \\"Outputs\\": {\\"VpcId\\": {\\"Value\\": {\\"Fn::GetAtt\\": [\\"Vpc\\", \\"VpcId\\"]}}}}
   */
  newTemplateBody?: string;
  /**
   * @remarks
   * The template content before correction.
   * 
   * @example
   * {\\"ROSTemplateFormatVersion\\": \\"2015-09-01\\", \\"Resources\\": {\\"Vpc\\": {\\"Type\\": \\"ALIYUN::ECS::VPC\\", \\"Properties\\": {\\"VpcName\\": \\"test\\", \\"CidrBlock\\": \\"192.168.0.0/16\\", \\"Description\\": \\"test1\\"}}}, \\"Outputs\\": {\\"VpcId\\": {\\"Value\\": {\\"Fn::GetAtt\\": [\\"Vpc\\", \\"VpcId\\"]}}}}
   */
  oldTemplateBody?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newTemplateBody: 'NewTemplateBody',
      oldTemplateBody: 'OldTemplateBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newTemplateBody: 'string',
      oldTemplateBody: 'string',
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

