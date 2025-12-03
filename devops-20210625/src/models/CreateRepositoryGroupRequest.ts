// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryGroupRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
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
   * test-create-group
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 26842
   */
  parentId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-create-group
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  visibilityLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      avatarUrl: 'avatarUrl',
      description: 'description',
      name: 'name',
      parentId: 'parentId',
      path: 'path',
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
      parentId: 'number',
      path: 'string',
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

