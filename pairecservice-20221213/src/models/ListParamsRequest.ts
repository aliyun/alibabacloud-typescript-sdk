// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParamsRequest extends $dara.Model {
  encrypted?: boolean;
  /**
   * @remarks
   * The environment to which the parameter belongs. Valid values:
   * 
   * - Daily: A test environment for daily use.
   * 
   * - Prepub: A staging environment that mirrors the production environment.
   * 
   * - Product: The production environment.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can call the ListInstances operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * home
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The scene ID. You can call the ListScenes operation to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'Encrypted',
      environment: 'Environment',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      environment: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sceneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

