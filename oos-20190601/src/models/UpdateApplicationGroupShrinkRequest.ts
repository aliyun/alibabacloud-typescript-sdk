// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplication
   */
  applicationName?: string;
  deployedRevisionId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * MyApplicationGroup
   */
  name?: string;
  /**
   * @remarks
   * The new name of the application group.
   * 
   * @example
   * UpdateMyApplicationGroup
   */
  newName?: string;
  /**
   * @remarks
   * The name of the configuration update operation.
   * 
   * @example
   * /business/v1/product/spus/{spu_id}
   */
  operationName?: string;
  /**
   * @remarks
   * The JSON string that consists of a set of parameters. Default value: {}.
   * 
   * @example
   * {"username": "xx"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployedRevisionId: 'DeployedRevisionId',
      name: 'Name',
      newName: 'NewName',
      operationName: 'OperationName',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployedRevisionId: 'string',
      name: 'string',
      newName: 'string',
      operationName: 'string',
      parametersShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

