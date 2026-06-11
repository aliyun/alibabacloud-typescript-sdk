// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadSkillViaOssRequest extends $dara.Model {
  commitMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  namespaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ossObjectName?: string;
  /**
   * @example
   * false
   */
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      commitMsg: 'CommitMsg',
      namespaceId: 'NamespaceId',
      ossObjectName: 'OssObjectName',
      overwrite: 'Overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitMsg: 'string',
      namespaceId: 'string',
      ossObjectName: 'string',
      overwrite: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

