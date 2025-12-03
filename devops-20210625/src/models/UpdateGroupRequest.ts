// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61dxxxxxxx975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * codeup_group
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * codeup_group
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org/group/subgroup/here
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 10
   */
  visibilityLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1e9903d8b3f1xxxxxf9286ef5
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      avatarUrl: 'avatarUrl',
      description: 'description',
      name: 'name',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      visibilityLevel: 'visibilityLevel',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatarUrl: 'string',
      description: 'string',
      name: 'string',
      path: 'string',
      pathWithNamespace: 'string',
      visibilityLevel: 'number',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

