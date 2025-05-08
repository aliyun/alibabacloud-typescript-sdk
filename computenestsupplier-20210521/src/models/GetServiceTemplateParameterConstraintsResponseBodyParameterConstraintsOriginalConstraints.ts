// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * lnch_Source
   */
  propertyName?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * i-8vb0smn1lf6g77md****
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * serviceinstance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      propertyName: 'PropertyName',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      propertyName: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

