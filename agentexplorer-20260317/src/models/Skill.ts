// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Skill extends $dara.Model {
  /**
   * @example
   * compute
   */
  categoryCode?: string;
  categoryName?: string;
  /**
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  description?: string;
  displayName?: string;
  /**
   * @example
   * 1024
   */
  installCount?: number;
  /**
   * @example
   * 128
   */
  likeCount?: number;
  /**
   * @example
   * deploy-to-vercel
   */
  skillName?: string;
  /**
   * @example
   * ecs
   */
  subCategoryCode?: string;
  subCategoryName?: string;
  /**
   * @example
   * 2026-03-17T00:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      categoryName: 'categoryName',
      createdAt: 'createdAt',
      description: 'description',
      displayName: 'displayName',
      installCount: 'installCount',
      likeCount: 'likeCount',
      skillName: 'skillName',
      subCategoryCode: 'subCategoryCode',
      subCategoryName: 'subCategoryName',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      createdAt: 'string',
      description: 'string',
      displayName: 'string',
      installCount: 'number',
      likeCount: 'number',
      skillName: 'string',
      subCategoryCode: 'string',
      subCategoryName: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

