// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  errorMessage?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * InstanceType is needed while query DataDisk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

