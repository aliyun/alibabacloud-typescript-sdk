// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelPermissionsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The exact match for a single model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The fuzzy match for the model name.
   * 
   * @example
   * OVERLAY
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'model',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization query dimension. Valid values:
   * 
   * - **AUTHORIZED**: models that have been authorized for the specified modelAction. Use this value together with modelAction.
   * - **AUTHORIZABLE**: full authorizable catalog.
   * 
   * @example
   * AUTHORIZABLE
   */
  authorizationScope?: string;
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: ListModelPermissionsRequestFilter;
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20. If the upper limit is exceeded, the error code InvalidParameter.maxResults is returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The authorization action dimension. Valid values:
   * 
   * - **INFERENCE**: model inference authorization.
   * 
   * @example
   * INFERENCE
   */
  modelAction?: string;
  /**
   * @remarks
   * The pagination token (offset) for the next page. Do not pass this parameter for the first page.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The workspace ID. This parameter is required and cannot be empty.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-32klhjk2312334jkh
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationScope: 'authorizationScope',
      filter: 'filter',
      maxResults: 'maxResults',
      modelAction: 'modelAction',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationScope: 'string',
      filter: ListModelPermissionsRequestFilter,
      maxResults: 'number',
      modelAction: 'string',
      nextToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

