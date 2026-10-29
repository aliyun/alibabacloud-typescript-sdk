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
   * The query dimension for the authorization scope.
   * 
   * - **AUTHORIZED**: models that are authorized for the specified modelAction. This value must be used together with modelAction.
   * - **AUTHORIZABLE**: all authorizable directories.
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
   * The maximum number of entries to return on each page. Default value: 20. If the value exceeds the upper limit, the `InvalidParameter.maxResults` error is returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The authorization action dimension.
   * 
   * - **INFERENCE**: model invocation authorization.
   * 
   * @example
   * INFERENCE
   */
  modelAction?: string;
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page. This parameter is not required for the first page.
   * 
   * @example
   * lwytFRtLdNk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the workspace. This parameter is required.
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

