// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelDeploymentSpecRequest extends $dara.Model {
  /**
   * @example
   * cmu-biz
   */
  bizKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.0
   */
  modelVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prf_5cd37a1c7eaa***c6829dbb02
   */
  profileId?: string;
  /**
   * @example
   * %7B%22MemberType%22%3A%22Default%22%7D
   */
  resourceSelections?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 295949
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      bizKey: 'BizKey',
      modelVersion: 'ModelVersion',
      profileId: 'ProfileId',
      resourceSelections: 'ResourceSelections',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizKey: 'string',
      modelVersion: 'string',
      profileId: 'string',
      resourceSelections: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

