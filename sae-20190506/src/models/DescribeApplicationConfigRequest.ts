// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationConfigRequest extends $dara.Model {
  /**
   * @remarks
   * 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * 0026ff7f-2b57-4127-bdd0-9bf202bb\\*\\*\\*\\*
   * 
   * @example
   * 0026ff7f-2b57-4127-bdd0-9bf202bb****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

