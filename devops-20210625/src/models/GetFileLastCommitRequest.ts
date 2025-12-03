// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileLastCommitRequest extends $dara.Model {
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
   * src/main/test.java
   */
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * master
   */
  sha?: string;
  /**
   * @example
   * false
   */
  showSignature?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      filePath: 'filePath',
      organizationId: 'organizationId',
      sha: 'sha',
      showSignature: 'showSignature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      filePath: 'string',
      organizationId: 'string',
      sha: 'string',
      showSignature: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

