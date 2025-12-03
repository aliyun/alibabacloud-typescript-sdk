// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMergeRequestRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WEB
   */
  createFrom?: string;
  description?: string;
  reviewerIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sourceBranch
   */
  sourceBranch?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2369234
   */
  sourceProjectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * targetBranch
   */
  targetBranch?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2369234
   */
  targetProjectId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  /**
   * @example
   * 722200214032b6b31e6f1434ab
   */
  workItemIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6270e731cfea268afc21ccac
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      createFrom: 'createFrom',
      description: 'description',
      reviewerIds: 'reviewerIds',
      sourceBranch: 'sourceBranch',
      sourceProjectId: 'sourceProjectId',
      targetBranch: 'targetBranch',
      targetProjectId: 'targetProjectId',
      title: 'title',
      workItemIds: 'workItemIds',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      createFrom: 'string',
      description: 'string',
      reviewerIds: { 'type': 'array', 'itemType': 'string' },
      sourceBranch: 'string',
      sourceProjectId: 'number',
      targetBranch: 'string',
      targetProjectId: 'number',
      title: 'string',
      workItemIds: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reviewerIds)) {
      $dara.Model.validateArray(this.reviewerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

