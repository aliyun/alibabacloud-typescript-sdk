// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParamsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the parameter is encrypted.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The environment to which the parameter belongs. Valid values:
   * - Daily: daily environment
   * - Pre: staging environment
   * - Prod: production environment
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the parameter.
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
   * The page size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The scene ID. You can obtain this ID by calling the ListScenes operation.
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

