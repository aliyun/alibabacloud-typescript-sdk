// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT
   */
  dimension?: string;
  /**
   * @remarks
   * The cause of the modification failure.
   * 
   * @example
   * ob2mr3oae0****
   */
  dimensionValue?: string;
  /**
   * @remarks
   * Alibaba Cloud CLI
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource ID of the parameter type.    
   * You can leave this parameter unspecified when you call this operation to modify cluster parameters. In the case of tenant parameters, pass the tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Name":"connect_timeout","Value":"20"}]
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      instanceId: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

