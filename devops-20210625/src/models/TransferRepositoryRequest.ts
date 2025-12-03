// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferRepositoryRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupId?: string;
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
  repositoryId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      groupId: 'groupId',
      organizationId: 'organizationId',
      repositoryId: 'repositoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      groupId: 'string',
      organizationId: 'string',
      repositoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

