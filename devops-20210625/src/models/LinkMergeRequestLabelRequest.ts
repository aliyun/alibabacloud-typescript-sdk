// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkMergeRequestLabelRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  labelIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  localId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      labelIds: 'labelIds',
      localId: 'localId',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      labelIds: { 'type': 'array', 'itemType': 'string' },
      localId: 'number',
      organizationId: 'string',
      repositoryIdentity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelIds)) {
      $dara.Model.validateArray(this.labelIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

