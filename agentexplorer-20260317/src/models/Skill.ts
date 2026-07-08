// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Skill extends $dara.Model {
  /**
   * @remarks
   * The primary category code.
   * 
   * @example
   * compute
   */
  categoryCode?: string;
  /**
   * @remarks
   * The primary category name.
   * 
   * @example
   * 计算
   */
  categoryName?: string;
  categoryNameEn?: string;
  /**
   * @remarks
   * The time when the Agent Skill was created.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the Agent Skill.
   * 
   * @example
   * ECS 实例管理
   */
  description?: string;
  descriptionEn?: string;
  /**
   * @remarks
   * The display name of the Agent Skill.
   * 
   * @example
   * ECS 实例管理
   */
  displayName?: string;
  githubPath?: string;
  /**
   * @remarks
   * The number of installations.
   * 
   * @example
   * 1024
   */
  installCount?: number;
  /**
   * @remarks
   * The number of likes.
   * 
   * @example
   * 128
   */
  likeCount?: number;
  nameEn?: string;
  /**
   * @remarks
   * The English name of the Agent Skill, which serves as a unique identifier.
   * 
   * @example
   * deploy-to-vercel
   */
  skillName?: string;
  /**
   * @remarks
   * The secondary category code.
   * 
   * @example
   * ecs
   */
  subCategoryCode?: string;
  /**
   * @remarks
   * The secondary category name.
   * 
   * @example
   * 弹性计算
   */
  subCategoryName?: string;
  subCategoryNameEn?: string;
  /**
   * @remarks
   * The time when the Agent Skill was last updated.
   * 
   * @example
   * 2026-03-17T00:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      categoryName: 'categoryName',
      categoryNameEn: 'categoryNameEn',
      createdAt: 'createdAt',
      description: 'description',
      descriptionEn: 'descriptionEn',
      displayName: 'displayName',
      githubPath: 'githubPath',
      installCount: 'installCount',
      likeCount: 'likeCount',
      nameEn: 'nameEn',
      skillName: 'skillName',
      subCategoryCode: 'subCategoryCode',
      subCategoryName: 'subCategoryName',
      subCategoryNameEn: 'subCategoryNameEn',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      categoryName: 'string',
      categoryNameEn: 'string',
      createdAt: 'string',
      description: 'string',
      descriptionEn: 'string',
      displayName: 'string',
      githubPath: 'string',
      installCount: 'number',
      likeCount: 'number',
      nameEn: 'string',
      skillName: 'string',
      subCategoryCode: 'string',
      subCategoryName: 'string',
      subCategoryNameEn: 'string',
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

